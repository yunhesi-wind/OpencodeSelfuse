# OpenCode V2 全局 skills 与 MCP 使用记录

更新日期：2026-10-07。以下使用可移植路径，不包含个人 endpoint、密钥或本机绝对路径。

## 全局 skills

将本仓库 `skills/` 下的完整目录复制到：

```text
~/.config/opencode/skills/<skill-id>/SKILL.md
```

若设置了 `XDG_CONFIG_HOME`，使用对应的 `opencode/skills` 目录。
OpenCode 自动发现这个目录，无需配置 `skills.paths` 或重复添加 `skills`。
仓库 `skills/` 仅保留记录，不再由本仓库配置加载；两份副本不会自动同步。
以后修改仓库技能，需要按目录检查差异后同步到全局，避免覆盖全局的独立修改。

V2 的额外来源字段是数组，例如 `"skills": ["~/shared/opencode-skills"]`。
相对路径以当前工作目录为基准，而不是配置文件目录；跨项目使用应优先自动发现目录或绝对路径。
技能目录名决定 ID，frontmatter `name` 仅为显示名称。原有 `SKILL.md` 正文无需改写。

## MCP 原生 V2 字段

服务放在 `mcp.servers`；`enabled: true` 改为 `disabled: false`，禁用则使用 `disabled: true`。
V1 支持字段会在运行时归一化，迁移不是强制要求。
本仓库保持 7 个服务启用、Firebase 默认禁用；所有凭据保持 `{env:NAME}` 引用。
MCP 模板合并到全局时对所有项目生效，放到项目中则按目录继承；不要覆盖现有模型配置。

## Serena 不自动弹出面板

在 Serena 自己的全局配置 `~/.serena/serena_config.yml` 中设置：

```yaml
gui_log_window: false
web_dashboard: true
web_dashboard_open_on_launch: false
web_dashboard_interface: browser
```

这是 Serena 配置，不放入 OpenCode 的 JSONC；仅影响面板显示，不禁用 MCP 或模型工具调用。
在 Serena 下次启动时生效。已有面板不会因修改配置自动关闭；关闭对话也不等于停止后台 MCP 服务。

## Asana 依赖故障记录

本次遇到 npx 缓存安装不完整，先缺少 `ajv`，补齐后又暴露 `asynckit` 缺失文件。
最终通过备份并重新安装**该服务专属缓存目录**恢复。独立 MCP 初始化及 `tools/list` 成功返回 80 个工具。

不同机器的 npx 缓存目录不同；应先从错误堆栈定位、复现依赖加载问题，再修复相应目录。
不要直接复制本机缓存路径，也不要清空所有 npm 缓存。该修复无需修改 API Token 或 OpenCode MCP 写法。

## Provider 过滤策略

全局 `enabled_providers` 可选择改为 V2 policy（仅为示例，替换 provider ID）：

```jsonc
{
  "experimental": {
    "policies": [
      { "action": "provider.use", "resource": "*", "effect": "deny" },
      { "action": "provider.use", "resource": "your-provider", "effect": "allow" }
    ]
  }
}
```

规则按顺序匹配，默认拒绝后只允许列出的 provider。原 `enabled_providers` 仍受兼容支持。
私有模型参数、账户凭据和全局配置应保留在本机，不上传到这个公共模板。

## 验证

离线格式与目录检查：`node --test ./tests/config-portability.test.cjs`。
本机连接验证：在目标项目执行 `opencode mcp list`、`opencode models`；
不同目录下的服务范围可能不同，能列出模型也不证明模型接口全部能力已经验证。
