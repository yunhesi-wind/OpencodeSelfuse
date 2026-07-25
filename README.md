# OpenCode Selfuse

OpenCode 自用配置仓库 — Skills、MCP 服务器、环境配置，一站式复用。

## 目录结构

```
OpencodeSelfuse/
├── opencode.jsonc       # OpenCode 主配置（含 10 个 MCP 服务器）
├── skills/              # 42 个 Agent Skills
│   ├── ai-check/
│   ├── aigc-down-skill/
│   ├── caveman/
│   ├── design-an-interface/
│   ├── diagnose/
│   ├── doc-coauthoring/
│   ├── edit-article/
│   ├── grill-me/
│   ├── grill-with-docs/
│   ├── handoff/
│   ├── humanizer-zh/
│   ├── improve-codebase-architecture/
│   ├── manuscript-writing/
│   ├── nature-academic-search/
│   ├── nature-citation/
│   ├── nature-data/
│   ├── nature-figure/
│   ├── nature-paper2ppt/
│   ├── nature-polishing/
│   ├── nature-reader/
│   ├── nature-response/
│   ├── nature-reviewer/
│   ├── nature-writing/
│   ├── obsidian-vault/
│   ├── prototype/
│   ├── qa/
│   ├── request-refactor-plan/
│   ├── review/
│   ├── scaffold-exercises/
│   ├── setup-pre-commit/
│   ├── tdd/
│   ├── teach/
│   ├── to-issues/
│   ├── to-prd/
│   ├── triage/
│   ├── ubiquitous-language/
│   ├── ui-ux-pro-max/
│   ├── write-a-skill/
│   ├── writing-beats/
│   ├── writing-fragments/
│   ├── writing-shape/
│   └── zoom-out/
└── skills-analysis.md   # 117 Skill 完整分析文档
```

## MCP 服务器

配置了 10 个 MCP 服务器，8 个已就绪：

| 服务器 | 状态 | 说明 |
|--------|------|------|
| context7 | ✅ | 实时文档查询（remote） |
| github | ✅ | GitHub API（remote，需 GITHUB_TOKEN） |
| gitlab | ✅ | 极狐 GitLab（@yoda.digital/gitlab-mcp-server） |
| playwright | ✅ | 浏览器自动化（@playwright/mcp） |
| asana | ✅ | 项目管理（@blzvi/asana-mcp-server） |
| linear | ✅ | 问题跟踪（linear-mcp-server） |
| firebase | ❌ | 无 Google 账号 |
| terraform | ✅ | Terraform Registry（npm fallback） |
| serena | ❌ | 待安装 uv 工具链 |
| laravel-boost | ❌ | 需 PHP 环境 |

## 安装方式

```bash
# 克隆仓库
git clone https://github.com/yunhesi-test/OpencodeSelfuse.git

# 复制配置
cp opencode.jsonc ~/.config/opencode/opencode.jsonc
cp -r skills/* ~/.config/opencode/skills/
```

## 环境变量

需在系统环境变量中设置：

| 变量名 | 用途 |
|--------|------|
| GITHUB_TOKEN | GitHub API 认证 |
| GITLAB_TOKEN | 极狐 GitLab 认证 |
| ASANA_ACCESS_TOKEN | Asana API 认证 |
| LINEAR_API_KEY | Linear API 认证 |
| CONTEXT7_API_KEY | Context7 可选，提高限流 |
