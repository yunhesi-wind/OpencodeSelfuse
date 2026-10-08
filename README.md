# OpenCode Selfuse

OpenCode 自用配置仓库，集中维护可复用的 Agent Skills 和 MCP 服务配置。

## 当前配置概览

本仓库当前包含：

- 49 个 OpenCode Skills，按学术研究、Nature 投稿、写作、工程、设计和工作流分类
- 8 个 MCP 服务配置，其中 7 个启用，Firebase 默认禁用
- 一份可直接作为项目级或用户级模板使用的 `opencode.jsonc`

OpenCode 配置通常分为两层：

- 用户级配置：保存模型提供商等个人设置，例如 `~/.config/opencode/opencode.jsonc`
- 工作区/项目级配置：保存 MCP 服务，例如本仓库的 `opencode.jsonc`；skills 推荐安装到全局自动发现目录

用户级配置中的 API 地址、模型名称和本机路径不放入本仓库，避免泄露机器私有信息。

## 目录结构

```
OpencodeSelfuse/
├── opencode.jsonc       # V2 MCP 配置模板
├── skills/              # 49 个 Agent Skills 的记录副本
├── GLOBAL-SKILLS.md     # 全局安装、更新与配置说明
├── tests/              # 可移植的配置与技能格式检查
└── skills-analysis.md   # 当前 Skills 索引与分类说明
```

## Skills

推荐将 `skills/` 中的完整技能目录复制到 `~/.config/opencode/skills/`，由 OpenCode 自动发现。
本仓库 `skills/` 保留为记录副本，`opencode.jsonc` 不再包含依赖启动目录的相对路径。
记录副本与全局副本不会自动同步。详细操作见 [`GLOBAL-SKILLS.md`](GLOBAL-SKILLS.md)。

若需要额外指定来源，V2 使用数组（示例路径需替换成你的实际目录）：

```jsonc
{
  "skills": ["~/shared/opencode-skills"]
}
```

每个 skill 目录至少包含一个 `SKILL.md`，文件头部定义显示名称和触发描述；V2 的技能 ID 由目录名确定。
`name` 不必与目录相同，frontmatter 本身在运行时可选，但模型发现技能需要清晰的 `description`。
当前技能分组如下：

| 分类 | Skills |
|------|--------|
| 学术研究 | `academic-paper`, `academic-paper-reviewer`, `academic-pipeline`, `deep-research`, `manuscript-writing`, `ai-check`, `aigc-down-skill` |
| Nature 工作流 | `nature-academic-search`, `nature-citation`, `nature-data`, `nature-figure`, `nature-paper-to-patent`, `nature-paper2ppt`, `nature-polishing`, `nature-reader`, `nature-response`, `nature-reviewer`, `nature-writing` |
| 写作与文档 | `doc-coauthoring`, `docx`, `edit-article`, `humanizer-zh`, `handoff`, `writing-beats`, `writing-fragments`, `writing-shape`, `caveman`, `pdf` |
| 代码工程 | `design-an-interface`, `diagnose`, `grill-me`, `grill-with-docs`, `improve-codebase-architecture`, `prototype`, `qa`, `request-refactor-plan`, `review`, `scaffold-exercises`, `setup-pre-commit`, `tdd`, `teach`, `to-issues`, `to-prd`, `triage`, `ubiquitous-language`, `write-a-skill`, `zoom-out` |
| 个人与界面 | `obsidian-vault`, `ui-ux-pro-max` |

完整索引、触发条件和工作流说明见 [`skills-analysis.md`](skills-analysis.md)。

## MCP 服务

本仓库配置的 MCP 服务如下。密钥均通过环境变量注入，不应直接写入 JSONC。

| 服务 | 类型 | 状态 | 用途 | 认证/依赖 |
|------|------|------|------|-----------|
| `context7` | Remote | 启用 | 查询最新的库、框架和 API 文档 | `CONTEXT7_API_KEY` |
| `github` | Remote | 启用 | GitHub 仓库、Issue、PR、代码搜索和审查 | `GITHUB_TOKEN` |
| `gitlab` | Local | 启用 | 极狐 GitLab 仓库、MR、Issue、CI/CD 和 Wiki | `GITLAB_TOKEN` |
| `playwright` | Local | 启用 | 浏览器自动化、页面交互和端到端测试 | Node.js、`@playwright/mcp` |
| `asana` | Local | 启用 | 项目、任务、依赖、标签和时间跟踪 | `ASANA_ACCESS_TOKEN` |
| `linear` | Local | 启用 | Issue、项目和工作流状态管理 | `LINEAR_API_KEY` |
| `serena` | Local | 启用 | 语义代码分析、符号导航和重构辅助 | Serena agent executable |
| `firebase` | Local | 禁用 | Firebase、Firestore、认证、函数、托管和存储 | Google 凭据；`GOOGLE_APPLICATION_CREDENTIALS`、`FIREBASE_CONFIG` |

### MCP 配置示例

Remote MCP 使用 URL，Local MCP 使用命令数组；两者都支持 `{env:VARIABLE}` 环境变量插值：

```jsonc
{
  "mcp": {
    "servers": {
      "docs": {
        "type": "remote",
        "url": "https://example.com/mcp",
        "disabled": false,
        "oauth": false,
        "headers": {
          "Authorization": "Bearer {env:DOCS_TOKEN}"
        }
      },
      "browser": {
        "type": "local",
        "command": ["npx", "-y", "@playwright/mcp"],
        "disabled": false
      }
    }
  }
}
```

### 当前启用统计

- Remote：`context7`、`github`，共 2 个
- Local：`gitlab`、`playwright`、`asana`、`linear`、`serena`，共 5 个
- Disabled：`firebase`，共 1 个

本机根配置中的 Serena 使用了本机绝对路径；仓库模板使用 `serena-agent`，便于在目标机器通过 PATH 提供可执行文件。不要把本机绝对路径提交到仓库。

## 安装与使用

```bash
git clone https://github.com/yunhesi-wind/OpencodeSelfuse.git
```

将 MCP 模板合并到项目配置或全局配置中。**不要直接覆盖已有全局配置**，否则可能丢失模型、provider 等设置。
全局 skills 安装（在仓库根目录运行；如目标目录已存在，先检查并备份，不要盲目覆盖）：

```powershell
$configRoot = Join-Path $HOME '.config/opencode'
New-Item -ItemType Directory -Path $configRoot -Force | Out-Null
if (Test-Path (Join-Path $configRoot 'skills')) {
  throw '全局 skills 已存在，请先检查并备份，再按技能目录更新。'
}
Copy-Item -Recurse .\skills (Join-Path $configRoot 'skills')
```

## 桌面端 DS 美化（独立项目）

已整理为独立公开源码仓库：
[opencode-desktop-ds-theme](https://github.com/yunhesi-wind/opencode-desktop-ds-theme)。

- 深海女仆动态背景、透明顶栏、深蓝玻璃菜单和提问／权限面板。
- 半透明消息气泡和代码区；保留气泡发送状态变化、原生图标尺寸与差异状态。
- 当前主题版本 1.0.1：摘要面板、二级选择菜单与左上角菜单／子菜单统一 **60% 不透明度**；提问浮层 48%、代码底色 32%、已发送消息白灰底 62%。
- 显式覆盖摘要面板 `.session-summary-popover` 的原生透明底色，避免正文透出导致重叠。
- 版本／哈希／原生文件校验，原子 manifest 与备份发布，失败重试及独立恢复入口。
- 支持 Windows OpenCode Desktop **2.0.24 / 2.0.25**；2.0.25 已完成资源构建校验，视觉效果需安装后验收。不是官方插件，不支持跨版本恢复。
- 只发布源码；背景视频由用户确认权限后自行下载校验，应用包和备份仅在本机生成。
- 基于 daemon1s/opencode-deepseek-chan，保留原作者 MIT 署名；素材许可单独说明。
- 由 yunhesi-wind 维护，含 OpenAI GPT AI 辅助贡献，详见主题仓库声明。

在独立仓库执行 `npm ci --ignore-scripts`，按 README 下载素材后 `node deploy.cjs prepare`；
保存工作并完全退出桌面版，再运行 `Install-Theme.cmd`。异常时退出后运行 `Restore-Theme.cmd`。
从 2.0.24 更新到 2.0.25 后，在主题仓库运行 `node deploy.cjs prepare --upgrade`，成功后安装；也可退出桌面版后运行 `Upgrade-Theme.cmd`。
**不要将主题包、视频、备份或个人截图加入本配置仓库。**

## CLI 与 Windows Terminal DS 美化（独立项目）

独立公开源码仓库：
[opencode-cli-ds-theme](https://github.com/yunhesi-wind/opencode-cli-ds-theme)。

- 完整 V2 `ds-maid` 深蓝透明 CLI 主题，Windows Terminal 全局玻璃外壳及默认壁纸。
- 普通 PowerShell 在 Windows Terminal 中直接运行 `opencode` 也有背景；传统 conhost 不支持。
- 保留原有 profile 命令、工作目录、字体、快捷键与默认 profile 选择；显式外观覆盖仍优先。
- 额外提供独立 `OpenCode DS` profile，备份／恢复及变更冲突保护。
- 本机验收 CLI 2.0.24、Windows Terminal 1.25；Mica 需要 Windows 11 build >=22621。
- 静态背景从深海女仆视频提取，素材许可独立声明；只发布源码，不上传图片、个人配置或恢复记录。
- 官方模板 MIT 许可保留，由 yunhesi-wind 维护，含 OpenAI GPT 辅助贡献。

首次克隆后 `npm ci --ignore-scripts`，按仓库 README 下载并校验素材、提取静态帧；
执行 `node build-theme.cjs`，再双击 `Install-Theme.cmd`。
不修改 CLI 可执行文件、桌面主题、模型、MCP 或 skills；实际终端效果需要本机验收。

## 环境变量

按需设置以下变量。变量值只存在于本机环境，不应提交到 Git：

| 变量 | 用途 |
|------|------|
| `GITHUB_TOKEN` | GitHub API 认证 |
| `GITLAB_TOKEN` | 极狐 GitLab API 认证 |
| `ASANA_ACCESS_TOKEN` | Asana API 认证 |
| `LINEAR_API_KEY` | Linear API 认证 |
| `CONTEXT7_API_KEY` | Context7 认证和限流提升 |
| `GOOGLE_APPLICATION_CREDENTIALS` | Firebase Google 服务账号凭据路径 |
| `FIREBASE_CONFIG` | Firebase 配置；启用 Firebase MCP 时使用 |

当前仓库配置使用的 GitLab API 地址是 `https://jihulab.com/api/v4`。

## 配置注意事项

- 不要把真实 token、服务账号 JSON 或个人绝对路径提交到仓库。
- Local MCP 依赖 Node.js 和 `npx`，首次启动可能需要下载 npm 包。
- Firebase 默认关闭；只有准备好 Google/Firebase 凭据后再改为 `disabled: false`。
- 如果修改 MCP 包、认证方式或启用状态，请同步更新 README 和 `skills-analysis.md`。

## 2026-10-07 配置更新

- MCP 使用 V2 原生 `mcp.servers` 和 `disabled`；V1 格式仍兼容，并非原配置无效。
- skills 使用全局自动发现目录；不再依赖当前工作目录中的 `./skills`。
- Serena 自动弹窗关闭方式、Asana 缓存依赖故障排查、provider 过滤策略示例见 [`GLOBAL-SKILLS.md`](GLOBAL-SKILLS.md)。
- 模型和私有 endpoint 不上传；49 个技能正文保留原样，没有为迁移而重写。

可移植的离线回归检查（需要 Node.js；不连接 MCP 或请求模型）：

```powershell
node --test .\tests\config-portability.test.cjs
```

官方参考：[配置](https://opencode.ai/v2/docs/config)、[MCP](https://opencode.ai/v2/docs/mcp-servers)、
[Skills](https://opencode.ai/v2/docs/skills)、[迁移兼容](https://opencode.ai/v2/docs/migrate-v1)。
