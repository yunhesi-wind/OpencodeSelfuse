# Claude Code Skills 完整索引

> 扫描日期：2026-07-24
> 环境：Windows 11 + PowerShell / Git Bash
> 模型：deepseek-v4-pro (via DeepSeek Anthropic API)

---

## 目录

- [Skills 来源架构](#skills-来源架构)
- [一、自定义安装 Skills（~/.claude/skills/）](#一自定义安装-skills)
  - [学术写作类](#学术写作类)
  - [Nature 系列](#nature-系列)
  - [通用写作类](#通用写作类)
  - [代码工程类](#代码工程类)
  - [UI / 设计类](#ui--设计类)
- [二、官方插件市场 Skills（claude-plugins-official）](#二官方插件市场-skills)
  - [Anthropic 官方插件](#anthropic-官方插件)
  - [LSP 语言服务器插件](#lsp-语言服务器插件)
- [三、外部插件市场 Skills（external_plugins）](#三外部插件市场-skills)
- [四、Claude Code 内置 Skills](#四claude-code-内置-skills)
- [五、Skills 安装/下载方式汇总](#五skills-安装下载方式汇总)

---

## Skills 来源架构

```
Skills 来源
├── 1. 内置 Skills ──────────────── 随 Claude Code 安装自带
├── 2. 自定义安装 Skills ────────── ~/.claude/skills/ 目录
│     └── 安装方式：/install、git clone、手动创建
├── 3. 官方插件市场 ──────────────── claude-plugins-official (GitHub)
│     ├── plugins/ ──────────────── Anthropic 官方插件
│     └── external_plugins/ ─────── 第三方外部插件
│     └── 安装方式：claude plugins install <name>
└── 4. 项目级 Skills ───────────── .claude/skills/ (项目目录下)
```

---

## 一、自定义安装 Skills

> 存储路径：`~/.claude/skills/`（共 52 个）
> 安装方式：通过 `/install` 命令、`git clone` 或手动复制到该目录

### 学术写作类

| # | Skill 名称 | 版本 | 描述 | 安装方式 |
|---|-----------|------|------|---------|
| 1 | **academic-paper** | 3.2.0 | 12-agent 学术论文写作流水线。支持 11 种模式（完整/计划/大纲/修改/摘要/文献综述/格式转换/引用检查/披露/反驳审计），6 种论文类型，5 种引用格式，双语摘要，LaTeX/DOCX/PDF 输出 | `/install` 或 git clone |
| 2 | **academic-paper-reviewer** | 1.10.0 | 多视角学术论文审稿。模拟 5 位独立审稿人（EIC + 3 位同行评审 + Devil's Advocate），支持完整审稿、重新审稿、快速评估、方法论聚焦、苏格拉底引导和校准模式 | `/install` 或 git clone |
| 3 | **academic-pipeline** | 3.13.0 | 全流程学术研究编排器：研究 → 写作 → 诚信检查 → 审稿 → 修订 → 再审 → 最终检查 → 定稿。协调 deep-research、academic-paper、academic-paper-reviewer 三大技能 | `/install` 或 git clone |
| 4 | **deep-research** | 2.11.0 | 通用深度研究 agent 团队。13-agent 流水线，8 种模式：完整研究、快速简报、论文审阅、文献综述、事实核查、三段式文献扫描、苏格拉底引导研究对话、系统综述+可选元分析 | `/install` 或 git clone |
| 5 | **manuscript-writing** | — | 使用 IMRaD 格式结构化研究论文。适用于撰写研究手稿、组织论文章节、起草摘要或构建标题 | `/install` 或 git clone |
| 6 | **ai-check** | — | 中文学术 AI 写作率检测。生成参考 AI 写作率报告（Word/DOCX），经用户确认后可应用 AI 辅助修订 | `/install` 或 git clone |
| 7 | **aigc-down-skill** | — | 降低中文学术写作 AIGC 检测率。基于真实改写实验（AIGC 率从 >50% 降至 11%），检测并修复中文 AI 写作典型模式 | `/install` 或 git clone |

### Nature 系列

| # | Skill 名称 | 版本 | 描述 | 安装方式 |
|---|-----------|------|------|---------|
| 8 | **nature-academic-search** | — | 多源文献检索、引文验证、MeSH 检索策略、引文文件管理（.nbib/.ris/.bib 转换） | 社区贡献，`/install` |
| 9 | **nature-citation** | — | 为手稿添加严格的 Nature/CNS 引用，将长段落拆分为可引用片段，搜索 Nature Portfolio 旗下期刊 | 社区贡献，`/install` |
| 10 | **nature-data** | — | 准备、审计或修订 Nature 级数据可用性声明、数据仓库计划、数据集引用和 FAIR 元数据清单 | 社区贡献，`/install` |
| 11 | **nature-figure** | 2.0.0 | 投稿级 Nature/高影响力期刊图表工作流（Python/R）。支持 matplotlib/seaborn 和 ggplot2/patchwork/ComplexHeatmap | 社区贡献，`/install` |
| 12 | **nature-paper-to-patent** | — | 将科学论文/论文/技术报告转换为有据可查的中文发明专利草案，生成独立的权利要求书、说明书、摘要和摘要附图 DOCX | 社区贡献，`/install` |
| 13 | **nature-paper2ppt** | 2.0.0 | 从科学论文构建完整的 Nature 风格中文 PPTX 演示文稿，包含自审/修正循环 | 社区贡献，`/install` |
| 14 | **nature-polishing** | 6.1.0 | 使用写作策略原则润色、重组或翻译学术散文为 Nature 风格英语，支持 LaTeX 排版修复 | 社区贡献，`/install` |
| 15 | **nature-reader** | 2.0.0 | 构建全文中文-英文并列、图表感知、来源锚定的 Markdown 阅读器（支持 PDF/DOI/arXiv/出版商HTML） | 社区贡献，`/install` |
| 16 | **nature-response** | — | 起草、审计或修订 Nature 系列手稿修改的点对点审稿回复信 | 社区贡献，`/install` |
| 17 | **nature-reviewer** | — | 从审稿人视角模拟 Nature 风格审稿评估（投稿前审稿） | 社区贡献，`/install` |
| 18 | **nature-writing** | 1.0.0 | 从作者提供的声明、结果、图表、笔记或中文草稿起草、重组或规划 Nature 风格手稿章节 | 社区贡献，`/install` |

### 通用写作类

| # | Skill 名称 | 版本 | 描述 | 安装方式 |
|---|-----------|------|------|---------|
| 19 | **doc-coauthoring** | — | 结构化文档协同写作工作流。三阶段：上下文收集 → 精炼与结构 → 读者测试 | `/install` 或 git clone |
| 20 | **docx** | — | Word 文档（.docx）创建、读取、编辑和操作。支持目录、标题、页码、信头等专业格式 | 官方发布，`/install` |
| 21 | **pdf** | — | PDF 全面操作：读取/提取文本和表格、合并/拆分、旋转、水印、创建、填写表单、加密/解密、OCR | 官方发布，`/install` |
| 22 | **edit-article** | — | 编辑和改进文章：重组章节、提高清晰度、精简散文 | `/install` 或 git clone |
| 23 | **humanizer-zh** | — | 去除文本 AI 生成痕迹（中文）。基于 Wikipedia「AI 写作特征」综合指南 | `/install` 或 git clone |
| 24 | **handoff** | — | 将当前对话压缩为交接文档，供另一个 agent 继续工作 | `/install` 或 git clone |
| 25 | **writing-beats** | — | 以节拍旅程方式塑造文章，选择你自己的冒险风格 | `/install` 或 git clone |
| 26 | **writing-fragments** | — | 挖掘用户碎片化写作素材（声明、小品、尖锐句子、半成型想法）并追加到文档 | `/install` 或 git clone |
| 27 | **writing-shape** | — | 将原始素材 Markdown 文件通过对话式会话塑造成文章 | `/install` 或 git clone |
| 28 | **caveman** | — | 超压缩沟通模式，减少约 75% token 使用量，保留完整技术准确性 | `/install` 或 git clone |

### 代码工程类

| # | Skill 名称 | 版本 | 描述 | 安装方式 |
|---|-----------|------|------|---------|
| 29 | **design-an-interface** | — | 使用并行 sub-agent 为模块生成多个截然不同的接口设计。基于 "Design It Twice" 理念 | `/install` 或 git clone |
| 30 | **diagnose** | — | 规范化的 Bug 诊断循环：复现 → 最小化 → 假设 → 插桩 → 修复 → 回归测试 | `/install` 或 git clone |
| 31 | **git-guardrails-claude-code** | — | 设置 Claude Code hooks 阻止危险 git 命令（push、reset --hard、clean、branch -D 等） | `/install` 或 git clone |
| 32 | **grill-me** | — | 对计划或设计进行无情的访谈，直到达成共识，解决决策树中的每个分支 | `/install` 或 git clone |
| 33 | **grill-with-docs** | — | 在现有领域模型和文档的基础上挑战计划，同步更新 CONTEXT.md 和 ADR | `/install` 或 git clone |
| 34 | **improve-codebase-architecture** | — | 发现代码库中的深化机会，依据 CONTEXT.md 的领域语言和 ADR 的决策 | `/install` 或 git clone |
| 35 | **migrate-to-shoehorn** | — | 将测试文件中的 `as` 类型断言迁移到 @total-typescript/shoehorn | `/install` 或 git clone |
| 36 | **prototype** | — | 构建一次性原型以在提交前充实设计。支持终端应用和 UI 变体两种分支 | `/install` 或 git clone |
| 37 | **qa** | — | 交互式 QA 会话：用户对话式报告 bug，agent 将其归档为 GitHub issues | `/install` 或 git clone |
| 38 | **request-refactor-plan** | — | 通过用户访谈创建详细的重构计划（含小提交），并归档为 GitHub issue | `/install` 或 git clone |
| 39 | **review** | — | 双维度代码审查：Standards（编码规范遵循）+ Spec（需求匹配度）并行审查 | `/install` 或 git clone |
| 40 | **scaffold-exercises** | — | 创建包含章节、问题、解答和解析的练习目录结构 | `/install` 或 git clone |
| 41 | **setup-matt-pocock-skills** | — | 配置工程 skills 所需的项目上下文（issue tracker、triage 标签、领域文档布局） | `/install` 或 git clone |
| 42 | **setup-pre-commit** | — | 设置 Husky pre-commit hooks（lint-staged/Prettier、类型检查、测试） | `/install` 或 git clone |
| 43 | **tdd** | — | 测试驱动开发：红-绿-重构循环 | `/install` 或 git clone |
| 44 | **teach** | — | 在当前工作区内教授新技能或概念 | `/install` 或 git clone |
| 45 | **to-issues** | — | 将计划/规格/PRD 分解为独立的、可抓取的 issues（tracer-bullet 垂直切片） | `/install` 或 git clone |
| 46 | **to-prd** | — | 将当前对话上下文转化为 PRD 并发布到项目 issue tracker | `/install` 或 git clone |
| 47 | **triage** | — | 通过状态机驱动的分类角色对 issues 进行分类 | `/install` 或 git clone |
| 48 | **ubiquitous-language** | — | 从当前对话提取 DDD 风格的通用语言词汇表，标记歧义并提出规范术语 | `/install` 或 git clone |
| 49 | **write-a-skill** | — | 创建新的 agent skills，含适当结构、渐进式披露和捆绑资源 | `/install` 或 git clone |
| 50 | **zoom-out** | — | 让 agent 缩小视野，提供更广泛的背景或更高层次的视角 | `/install` 或 git clone |
| 51 | **obsidian-vault** | — | 在 Obsidian vault 中搜索、创建和管理笔记（含 wikilinks 和索引笔记） | `/install` 或 git clone |

### UI / 设计类

| # | Skill 名称 | 版本 | 描述 | 安装方式 |
|---|-----------|------|------|---------|
| 52 | **ui-ux-pro-max** | — | UI/UX 设计智能：67 种风格、96 种调色板、57 种字体配对、25 种图表、13 种技术栈（React/Next.js/Vue/Svelte/SwiftUI/React Native/Flutter/Tailwind/shadcn/ui） | `/install` 或 git clone |

---

## 二、官方插件市场 Skills

> 市场源：`https://github.com/anthropics/claude-plugins-official`
> 本地路径：`~/.claude/plugins/marketplaces/claude-plugins-official/`
> 安装方式：`claude plugins install <plugin-name>`（从官方市场安装）
> 状态：已注册市场但未全部安装（仅元数据可用）

### Anthropic 官方插件

| # | Plugin 名称 | 描述 | 安装命令 |
|---|------------|------|---------|
| 1 | **agent-sdk-dev** | Claude Agent SDK 开发插件 | `claude plugins install agent-sdk-dev` |
| 2 | **claude-code-setup** | 分析代码库并推荐定制化 Claude Code 自动化（hooks、skills、MCP 服务器、subagent） | `claude plugins install claude-code-setup` |
| 3 | **claude-md-management** | 维护和改进 CLAUDE.md 文件的工具——审计质量、捕获会话学习、保持项目记忆最新 | `claude plugins install claude-md-management` |
| 4 | **code-modernization** | 现代化遗留代码库（COBOL、遗留 Java/C++/.NET、单体 Web 应用），结构化工作流 | `claude plugins install code-modernization` |
| 5 | **code-review** | 使用多个专业 agent 进行自动化代码审查，基于置信度评分 | `claude plugins install code-review` |
| 6 | **code-simplifier** | 简化和精炼代码以提高清晰度、一致性和可维护性 | `claude plugins install code-simplifier` |
| 7 | **commit-commands** | 简化 git 工作流：提交、推送和创建 PR 的简单命令 | `claude plugins install commit-commands` |
| 8 | **cwc-makers** | Code-with-Claude Makers Cardputer 无缝入门，一键刷写固件和安装应用 | `claude plugins install cwc-makers` |
| 9 | **example-plugin** | 综合示例插件，演示所有 Claude Code 扩展选项 | `claude plugins install example-plugin` |
| 10 | **explanatory-output-style** | 添加关于实现选择和代码库模式的教育性见解 | `claude plugins install explanatory-output-style` |
| 11 | **feature-dev** | 全面的功能开发工作流：代码库探索、架构设计、质量审查 | `claude plugins install feature-dev` |
| 12 | **frontend-design** | 前端设计 skill，用于 UI/UX 实现 | `claude plugins install frontend-design` |
| 13 | **hookify** | 通过分析对话模式轻松创建 hooks 以防止不需要的行为 | `claude plugins install hookify` |
| 14 | **learning-output-style** | 交互式学习模式，在决策点请求有意义的代码贡献 | `claude plugins install learning-output-style` |
| 15 | **math-olympiad** | 解决竞赛数学（IMO、Putnam、USAMO），通过对抗验证捕获自验证遗漏的问题 | `claude plugins install math-olympiad` |
| 16 | **mcp-server-dev** | 设计和构建 MCP 服务器——部署模型、工具设计模式、认证和交互式 MCP 应用 | `claude plugins install mcp-server-dev` |
| 17 | **mcp-tunnels** | 通过 Anthropic MCP 隧道将 Claude 连接到私有 MCP 服务器 | `claude plugins install mcp-tunnels` |
| 18 | **playground** | 创建交互式 HTML 实验场——自包含单文件浏览器，含可视化控件和实时预览 | `claude plugins install playground` |
| 19 | **plugin-dev** | 插件开发工具包：创建 agents、commands、hooks、MCP 集成和全面插件结构指导 | `claude plugins install plugin-dev` |
| 20 | **pr-review-toolkit** | 全面的 PR 审查 agents：评论、测试、错误处理、类型设计、代码质量、代码简化 | `claude plugins install pr-review-toolkit` |
| 21 | **project-artifact** | 生成并发布项目状态 artifact——带标签的状态页面，通过内置 Artifact 工具发布 | `claude plugins install project-artifact` |
| 22 | **ralph-loop** | 持续自引用 AI 循环，实现 Ralph Wiggum 技术：在 while-true 循环中运行 Claude | `claude plugins install ralph-loop` |
| 23 | **security-guidance** | 安全审查 Claude 生成代码：模式匹配警告 + LLM 驱动的 diff 审查 + agentic 提交审查 | `claude plugins install security-guidance` |
| 24 | **session-report** | 会话报告生成 | `claude plugins install session-report` |
| 25 | **skill-creator** | 创建新 skills、改进现有 skills、运行 evals 测试、基准测试性能 | `claude plugins install skill-creator` |

### LSP 语言服务器插件

| # | Plugin 名称 | 描述 | 安装命令 |
|---|------------|------|---------|
| 26 | **clangd-lsp** | C/C++ LSP 支持（clangd） | `claude plugins install clangd-lsp` |
| 27 | **csharp-lsp** | C# LSP 支持 | `claude plugins install csharp-lsp` |
| 28 | **gopls-lsp** | Go LSP 支持（gopls） | `claude plugins install gopls-lsp` |
| 29 | **jdtls-lsp** | Java LSP 支持（Eclipse JDT LS） | `claude plugins install jdtls-lsp` |
| 30 | **kotlin-lsp** | Kotlin LSP 支持 | `claude plugins install kotlin-lsp` |
| 31 | **lua-lsp** | Lua LSP 支持 | `claude plugins install lua-lsp` |
| 32 | **php-lsp** | PHP LSP 支持 | `claude plugins install php-lsp` |
| 33 | **pyright-lsp** | Python LSP 支持（Pyright） | `claude plugins install pyright-lsp` |
| 34 | **ruby-lsp** | Ruby LSP 支持 | `claude plugins install ruby-lsp` |
| 35 | **rust-analyzer-lsp** | Rust LSP 支持（rust-analyzer） | `claude plugins install rust-analyzer-lsp` |
| 36 | **swift-lsp** | Swift LSP 支持 | `claude plugins install swift-lsp` |
| 37 | **typescript-lsp** | TypeScript/JavaScript LSP 支持 | `claude plugins install typescript-lsp` |

---

## 三、外部插件市场 Skills

> 市场源：`https://github.com/anthropics/claude-plugins-official`（external_plugins/ 目录）
> 本地路径：`~/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/`
> 安装方式：`claude plugins install <plugin-name>`（从官方市场中列出的第三方插件）

| # | Plugin 名称 | 提供方 | 描述 | 安装命令 |
|---|------------|-------|------|---------|
| 1 | **asana** | Asana | Asana 项目管理集成——创建和管理任务、搜索项目、更新分配、跟踪进度 | `claude plugins install asana` |
| 2 | **context7** | Upstash | 最新文档查询 MCP 服务器，直接从源仓库拉取版本特定文档和代码示例 | `claude plugins install context7` |
| 3 | **discord** | 社区 | Discord 消息桥接通道，内置访问控制，通过 /discord:access 管理配对、白名单和策略 | `claude plugins install discord` |
| 4 | **fakechat** | 社区 | 本地 localhost iMessage 风格 Web 聊天测试界面，支持文件上传和编辑 | `claude plugins install fakechat` |
| 5 | **firebase** | Google | Google Firebase MCP 集成——管理 Firestore、认证、云函数、托管和存储 | `claude plugins install firebase` |
| 6 | **github** | GitHub | 官方 GitHub MCP 服务器——创建 issues、管理 PR、审查代码、搜索仓库 | `claude plugins install github` |
| 7 | **gitlab** | GitLab | GitLab DevOps 平台集成——管理仓库、MR、CI/CD 流水线、issues 和 Wiki | `claude plugins install gitlab` |
| 8 | **greptile** | Greptile | AI 代码审查 agent，查看和解决 Greptile 的 PR 审查评论 | `claude plugins install greptile` |
| 9 | **imessage** | 社区 | iMessage 通道——直接读取 chat.db，通过 AppleScript 发送，内置访问控制 | `claude plugins install imessage` |
| 10 | **laravel-boost** | Laravel | Laravel 开发工具包 MCP 服务器——Artisan 命令、Eloquent 查询、路由、迁移 | `claude plugins install laravel-boost` |
| 11 | **linear** | Linear | Linear 问题跟踪集成——创建 issues、管理项目、更新状态、跨工作区搜索 | `claude plugins install linear` |
| 12 | **playwright** | Microsoft | 浏览器自动化和端到端测试 MCP 服务器——网页交互、截图、表单填写、自动化测试 | `claude plugins install playwright` |
| 13 | **serena** | Oraios | 语义代码分析 MCP 服务器——智能代码理解、重构建议、代码库导航 | `claude plugins install serena` |
| 14 | **telegram** | 社区 | Telegram 消息桥接通道，内置访问控制，通过 /telegram:access 管理 | `claude plugins install telegram` |
| 15 | **terraform** | HashiCorp | Terraform MCP 服务器——与 Terraform 生态系统集成，实现 IaC 自动化 | `claude plugins install terraform` |

---

## 四、Claude Code 内置 Skills

> 随 Claude Code CLI 安装自带，无需额外安装

| # | Skill 名称 | 类型 | 描述 | 触发方式 |
|---|-----------|------|------|---------|
| 1 | **init** | 项目管理 | 初始化项目 Claude Code 配置 | `/init` |
| 2 | **review** | 代码审查 | 审查当前变更（与自定义 review 不同，这是内置版本） | `/review` |
| 3 | **code-review** | 代码审查 | 审查当前 diff 的正确性 bug 和复用/简化/效率问题；支持 `--comment` 和 `--fix` | `/code-review` |
| 4 | **security-review** | 安全审查 | 安全审查代码变更 | `/security-review` |
| 5 | **simplify** | 代码优化 | 审查已更改代码的复用、简化、效率和高度问题并应用修复 | `/simplify` |
| 6 | **verify** | 验证 | 通过运行应用并观察行为来验证代码变更 | `/verify` |
| 7 | **run** | 运行 | 启动和驱动项目应用以查看变更效果 | `/run` |
| 8 | **update-config** | 配置 | 通过 settings.json 配置 Claude Code 工具链 | `/update-config` |
| 9 | **keybindings-help** | 配置 | 自定义键盘快捷键、重新绑定按键、添加和弦绑定 | `/keybindings-help` |
| 10 | **fewer-permission-prompts** | 配置 | 扫描对话记录中的常见只读命令，添加优先允许列表以减少权限提示 | `/fewer-permission-prompts` |
| 11 | **loop** | 自动化 | 按循环间隔运行提示或斜杠命令（如 `/loop 5m /foo`） | `/loop` |
| 12 | **claude-api** | 参考 | Claude API / Anthropic SDK 参考——模型 ID、定价、参数、流式、工具使用、MCP、缓存、token 计数 | 自动触发 |
| 13 | **handoff** | 会话管理 | 将当前对话压缩为交接文档 | `/handoff` |

---

## 五、Skills 安装/下载方式汇总

### 方式 1：`/install` 命令（自定义 Skills）

最常用的安装方式，将社区 skill 仓库克隆到 `~/.claude/skills/`：

```bash
# 在 Claude Code 对话中直接输入
/install <skill-name>
```

或手动操作：
```bash
cd ~/.claude/skills/
git clone <skill-repo-url> <skill-name>
```

### 方式 2：`claude plugins install`（插件市场）

从官方或第三方插件市场安装：

```bash
# 安装官方插件
claude plugins install code-review
claude plugins install feature-dev
claude plugins install security-guidance

# 安装 LSP 插件
claude plugins install typescript-lsp
claude plugins install pyright-lsp

# 安装外部第三方插件
claude plugins install github
claude plugins install linear
claude plugins install playwright
```

### 方式 3：注册插件市场

```bash
# 注册官方市场
claude plugins marketplace add claude-plugins-official \
  --source github \
  --repo anthropics/claude-plugins-official

# 查看可用插件
claude plugins list

# 查看已注册市场
claude plugins marketplace list
```

### 方式 4：`/plugin` 命令（对话内管理）

在 Claude Code 对话中直接管理插件：

```
/plugin install <name>     # 安装插件
/plugin uninstall <name>   # 卸载插件
/plugin list               # 列出已安装插件
/plugin search <keyword>   # 搜索可用插件
```

### 方式 5：手动创建 Skills

使用 `write-a-skill` skill 或手动创建：

```bash
mkdir -p ~/.claude/skills/my-skill/.claude
# 创建 skill.md 文件，包含 YAML frontmatter 和说明
```

Skill 文件结构：
```
~/.claude/skills/
└── my-skill/
    └── .claude/
        └── skill.md      # 必需：skill 定义文件
```

Skill frontmatter 示例：
```yaml
---
name: my-skill
description: 简短描述
argument-hint: "[可选参数提示]"
disable-model-invocation: true  # 可选：禁用模型自动调用
---
```

### 方式 6：项目级 Skills

在项目目录下创建 `.claude/skills/` 目录，放置项目专属 skills：

```
<project-root>/
└── .claude/
    └── skills/
        └── <skill-name>/
            └── skill.md
```

---

## 附录：当前环境配置

| 配置项 | 值 |
|-------|-----|
| Skills 目录 | `~/.claude/skills/`（52 个自定义 skills） |
| 插件市场 | `claude-plugins-official` (GitHub: anthropics/claude-plugins-official) |
| 官方插件数 | 37（15 个 LSP + 22 个功能插件） |
| 外部插件数 | 15 个第三方集成 |
| 内置 Skills | 13 个 |
| 模型 | deepseek-v4-pro |
| 平台 | Windows 11 Pro 10.0.26200 |
| Shell | PowerShell 5.1 + Git Bash |

---

> **Skills 总数统计**：52（自定义）+ 37（官方插件市场）+ 15（外部插件市场）+ 13（内置）= **117 个**
