# OpenCode Selfuse

OpenCode 自用配置仓库，集中维护可复用的 Agent Skills 和 MCP 服务配置。

## 当前配置概览

本仓库当前包含：

- 49 个 OpenCode Skills，按学术研究、Nature 投稿、写作、工程、设计和工作流分类
- 8 个 MCP 服务配置，其中 7 个启用，Firebase 默认禁用
- 一份可直接作为项目级或用户级模板使用的 `opencode.jsonc`

OpenCode 配置通常分为两层：

- 用户级配置：保存模型提供商等个人设置，例如 `~/.config/opencode/opencode.jsonc`
- 工作区/项目级配置：保存 skills 路径和 MCP 服务，例如本仓库的 `opencode.jsonc`

用户级配置中的 API 地址、模型名称和本机路径不放入本仓库，避免泄露机器私有信息。

## 目录结构

```
OpencodeSelfuse/
├── opencode.jsonc       # Skills 和 MCP 配置模板
├── skills/              # 49 个 Agent Skills
└── skills-analysis.md   # 当前 Skills 索引与分类说明
```

## Skills

Skills 通过配置中的 `skills.paths` 自动发现：

```jsonc
{
  "skills": {
    "paths": ["./skills"]
  }
}
```

每个 skill 目录至少包含一个 `SKILL.md`，文件头部定义名称和触发描述。当前技能分组如下：

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
    "docs": {
      "type": "remote",
      "url": "https://example.com/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer {env:DOCS_TOKEN}"
      }
    },
    "browser": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp"],
      "enabled": true
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

将仓库配置作为项目配置使用时，在项目根目录引用或复制 `opencode.jsonc`。若复制到用户级配置目录，请将 `skills.paths` 改为实际的 skills 路径，例如：

```jsonc
{
  "skills": {
    "paths": ["~/.config/opencode/skills"]
  }
}
```

Windows PowerShell 示例：

```powershell
Copy-Item .\opencode.jsonc $HOME\.config\opencode\opencode.jsonc
Copy-Item -Recurse .\skills $HOME\.config\opencode\skills
```

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
- Firebase 默认关闭；只有准备好 Google/Firebase 凭据后再改为 `enabled: true`。
- 如果修改 MCP 包、认证方式或启用状态，请同步更新 README 和 `skills-analysis.md`。
