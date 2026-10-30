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
$configBase = if ($env:XDG_CONFIG_HOME) { $env:XDG_CONFIG_HOME } else { Join-Path $HOME '.config' }
$configRoot = Join-Path $configBase 'opencode'
New-Item -ItemType Directory -Path $configRoot -Force | Out-Null
if (Test-Path (Join-Path $configRoot 'skills')) {
  throw '全局 skills 已存在，请先检查并备份，再按技能目录更新。'
}
Copy-Item -Recurse .\skills (Join-Path $configRoot 'skills')
```

## 桌面端 DS 美化（独立项目）

独立源码仓库：[opencode-desktop-ds-theme](https://github.com/yunhesi-wind/opencode-desktop-ds-theme)。
本机项目：`D:\project\AI_test\opencode桌面端ds美化-plugin`。本仓库只存描述和链接，不保存主题副本、素材或构建产物。

当前方案为 **3.0.0 官方 GUI 插件**（`./gui-experimental`），不再修改 `app.asar`，官方更新不会覆盖补丁。

- 安装：把插件目录放在固定位置，在全局 `opencode.jsonc` 的 `plugins` 中加入该目录的绝对路径；**完全退出桌面端再打开**；设置 → **深海皮肤** 打开「启用颜色皮肤」。
- 只注入颜色类 CSS（`color`、`background-*`、`border-*-color`、`box-shadow`、`outline-color`、`scrollbar-color` 与审计过的颜色变量）；构建期 PostCSS 门禁拒绝 `width/padding/position/transform/font/overflow/z-index` 等一切可能影响布局的属性。
- 背景画在 `html` 上，不新增节点、不影响文档流；视频背景是唯一例外（`position: fixed` + `pointer-events: none` + `inert`），窗口不可见时自动暂停。
- 需要官方**深色模式**；首版不含实时模糊（`backdrop-filter` 会创建包含块）。GUI 插件 API 仍标记 experimental，官方大版本升级后需重新确认加载状态与配色。
- 布局验收用仓库内 `DSLayout.js` 在 DevTools 做前后快照 diff，要求 0 像素差异；不以截图替代。
- 仓库发布源码、构建产物 `dist/` 与说明；背景素材 `assets/` 不入库。`npm run build` 默认内嵌原片，`DS_VIDEO_COMPRESS=1` 时输出 720p 轻量版。

每次更新先验证插件与文档，再同步本节，确认完成后分别提交并推送两仓库；CLI 美化独立更新。详细步骤、构建与验收说明以主题仓库 README 为准。

## CLI DS 美化（独立项目）

独立公开源码仓库：[opencode-cli-ds-theme](https://github.com/yunhesi-wind/opencode-cli-ds-theme)。

CLI 美化主项目：`D:\project\AI_test\opencodeCli美化`。
本配置仓库只保留描述和链接，不再二次保存 CLI 主题项目。

- Windows Terminal 全局深蓝玻璃外壳和 profile 默认壁纸，保留各 profile 的显式覆盖；额外提供独立 `OpenCode DS` profile。
- 深海女仆视频第 2 秒提取的静态 PNG；壁纸 opacity 28%，窗口 opacity 92%，启用 acrylic。
- OpenCode CLI 使用 `ds-maid` 暗色透明主题；菜单和代码差异保留阅读与状态底色。
- 普通 PowerShell 在 Windows Terminal 中直接运行 `opencode` 也有背景；传统控制台窗口不支持该壁纸配置。
- 不修改 CLI 可执行文件，不影响桌面版主题、模型、MCP、skills 或会话数据。
- 已按最新 V2 CLI **2.0.32** 核对官方主题模板，与 2.0.24 模板逐字节一致，无需重装主题；已完成主题生成和离线测试。本机 CLI 仍为 2.0.24，2.0.32 实际运行与视觉效果待升级后验收。
- 在独立项目目录双击 `Launch-OpenCode.cmd` 启动；`Restore-Theme.cmd` 在配置未被后续修改时恢复原始设置。
- 素材、备份及安装记录只保存在独立项目本机目录；主题 GitHub 仓库仅发布源码、完整 V2 主题和首次安装说明，不上传素材、backups/runtime 或个人配置。

后续在独立项目维护并同步其 GitHub 仓库，本仓库只同步相关描述，不复制项目文件。说明和素材署名见独立项目的 README 与 THIRD_PARTY_NOTICES。

## 美化项目统一更新约定

1. 桌面美化与 CLI 美化分别在各自独立目录／GitHub 仓库维护，版本与更新节奏互不绑定；更新其中一个不要求修改另一个。
2. 每次主题项目更新时，更新其源码、测试及文档，并同步本 README 对应主题的描述；本仓库不二次保存主题源码、素材、构建产物、备份或主题副本目录。
3. 按对应主题 README 完成验证，并核对两处版本、效果和步骤一致后，再分别提交并推送发生变化的主题仓库和本仓库的说明文档到各自 GitHub。只提交本次相关改动，保留其他暂存和未暂存内容，不夹带无关配置／技能更新。
4. 区分源码／构建验证、实际安装与视觉验收；纯说明更新无需安装主题。分别报告各仓库提交和推送状态，部分推送失败时明确说明并补推，不宣称全部同步完成。

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

全部可移植回归检查：`node --test ./tests/*.test.cjs`。其中跨主题仓库检查仅在本机存在相邻独立项目时执行，否则明确跳过。

`tests/*.local.cjs` 仅作为本机私有检查，不提交 GitHub，也不属于上述离线测试集。此类检查必须显式开启才能执行，可能启动真实 MCP 进程、访问网络并使用个人凭据；不得把连接测试描述为无副作用的离线检查。

官方参考：[配置](https://opencode.ai/v2/docs/config)、[MCP](https://opencode.ai/v2/docs/mcp-servers)、
[Skills](https://opencode.ai/v2/docs/skills)、[迁移兼容](https://opencode.ai/v2/docs/migrate-v1)。
