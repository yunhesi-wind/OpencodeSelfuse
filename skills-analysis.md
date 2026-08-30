# OpenCode Skills 索引

> 更新日期：2026-08-30
>
> 范围：本仓库 `skills/` 目录中的 OpenCode Skills，共 49 个。

本文件只记录当前仓库实际提供给 OpenCode 的 Skills。Claude Code 插件市场、内置命令和其他机器上的全局 Skills 不属于本仓库清单，因此不再与本地 Skills 合并统计。

## 来源与发现

Skills 由 `opencode.jsonc` 中的 `skills.paths` 指定：

```jsonc
{
  "skills": {
    "paths": ["./skills"]
  }
}
```

OpenCode 启动后扫描该目录下的 skill 子目录。每个 skill 通过 `SKILL.md` 的 YAML frontmatter 声明 `name` 和 `description`，模型根据任务描述选择是否加载对应工作流。

## Skills 清单

### 学术研究

| Skill | 主要用途 |
|-------|----------|
| `academic-paper` | 学术论文写作流水线，支持计划、大纲、摘要、修订、引用检查、披露和多种输出格式 |
| `academic-paper-reviewer` | 多视角模拟审稿，覆盖 EIC、同行评审和 Devil's Advocate 视角 |
| `academic-pipeline` | 编排研究、写作、诚信检查、审稿、修订和最终定稿的端到端流程 |
| `deep-research` | 多 agent 深度研究，支持快速简报、文献综述、事实核查和系统综述 |
| `manuscript-writing` | 使用 IMRaD 结构组织研究手稿、章节和摘要 |
| `ai-check` | 生成中文学术 AI 写作率参考报告，并在确认后辅助修订 |
| `aigc-down-skill` | 识别并改写中文学术文本中的典型 AI 写作模式 |

### Nature 投稿与科研产出

| Skill | 主要用途 |
|-------|----------|
| `nature-academic-search` | 多源学术检索、引文验证、MeSH 查询和 RIS/BibTeX/NBIB 等格式管理 |
| `nature-citation` | 将论述拆成可引用片段，并补充 Nature/CNS 方向的严格引用 |
| `nature-data` | 数据可用性声明、数据仓库计划、数据集引用和 FAIR 元数据清单 |
| `nature-figure` | 使用 Python 或 R 制作投稿级科研图表 |
| `nature-paper-to-patent` | 将论文、学位论文或技术报告转换为中文发明专利草案 |
| `nature-paper2ppt` | 从论文制作 Nature 风格中文 PPTX，并执行自审与修正 |
| `nature-polishing` | 润色、重组或翻译 Nature 风格学术英语，并修复 LaTeX 排版 |
| `nature-reader` | 构建中英文并列、图表感知、来源锚定的论文阅读器 |
| `nature-response` | 起草和审计 Nature 系列论文的逐条审稿回复信 |
| `nature-reviewer` | 以 Nature 审稿人视角进行投稿前评估 |
| `nature-writing` | 根据结果、图表、笔记或中文草稿规划和撰写 Nature 风格手稿 |

### 写作与文档

| Skill | 主要用途 |
|-------|----------|
| `doc-coauthoring` | 上下文收集、结构精炼和读者测试三阶段文档协作 |
| `docx` | 创建、读取、编辑和格式化 Word 文档 |
| `edit-article` | 重组文章、提升清晰度和精简表达 |
| `humanizer-zh` | 去除中文文本中的明显 AI 生成痕迹 |
| `handoff` | 将当前会话压缩为可供其他 agent 继续使用的交接文档 |
| `writing-beats` | 用节拍旅程和分支路径塑造文章结构 |
| `writing-fragments` | 收集并整理用户提供的碎片化写作素材 |
| `writing-shape` | 将 Markdown 原始素材通过对话塑造成完整文章 |
| `caveman` | 在保留技术准确性的前提下压缩沟通内容和 token 使用量 |
| `pdf` | 提取、合并、拆分、旋转、加密、OCR 和填写 PDF |

### 代码工程与工作流

| Skill | 主要用途 |
|-------|----------|
| `design-an-interface` | 通过并行 agent 生成多个 API、模块或接口设计方案 |
| `diagnose` | 按复现、最小化、假设、插桩、修复、回归测试流程诊断 Bug |
| `grill-me` | 通过连续追问暴露计划或设计中的未决分支和风险 |
| `grill-with-docs` | 结合领域模型、CONTEXT.md 和 ADR 挑战现有计划 |
| `improve-codebase-architecture` | 根据领域语言和架构决策发现代码库改进机会 |
| `prototype` | 构建一次性终端或 UI 原型，用于验证设计方向 |
| `qa` | 通过交互式 QA 会话记录和整理 Bug |
| `request-refactor-plan` | 通过访谈形成分小提交的重构计划，并可发布为 issue |
| `review` | 从编码规范和需求匹配两个维度执行代码审查 |
| `scaffold-exercises` | 创建带章节、题目、答案和解析的练习目录结构 |
| `setup-pre-commit` | 配置 Husky、lint-staged、格式化、类型检查和测试钩子 |
| `tdd` | 按 Red-Green-Refactor 实施测试驱动开发 |
| `teach` | 在当前工作区内讲解技术概念或新技能 |
| `to-issues` | 将计划、规格或 PRD 拆成可独立领取的垂直切片 issue |
| `to-prd` | 将对话上下文整理成产品需求文档并发布到 issue tracker |
| `triage` | 按状态机对 issue 进行分类、排序和分配 |
| `ubiquitous-language` | 提取 DDD 风格领域词汇表并标记术语歧义 |
| `write-a-skill` | 创建、改进和评估新的 Agent Skill |
| `zoom-out` | 从局部实现退回更高层次，补充背景、边界和遗漏项 |

### 个人知识与界面设计

| Skill | 主要用途 |
|-------|----------|
| `obsidian-vault` | 搜索、创建和维护 Obsidian 笔记、wikilink 和索引 |
| `ui-ux-pro-max` | 提供 UI 风格、配色、字体、图表和多技术栈设计建议 |

## 组合使用

这些 Skills 可以组合成更大的工作流：

```text
deep-research
    -> academic-paper
    -> academic-paper-reviewer
    -> nature-polishing / nature-citation / nature-data
```

工程任务常见组合：

```text
diagnose -> tdd -> review
prototype -> design-an-interface -> to-issues
grill-with-docs -> improve-codebase-architecture -> request-refactor-plan
```

## 维护规则

- 新增或删除 `skills/<name>/SKILL.md` 后，更新本文件的总数和对应分类。
- Skill 描述应说明适用场景和主要输出，避免把实现细节全部塞进 frontmatter。
- 依赖外部服务的 Skill 应通过 MCP 或环境变量获取认证信息，不要在 Skill 文件中写入密钥。
- 本索引只统计仓库内的 49 个 Skills，不统计 OpenCode 内置能力或其他目录中的 Skills。
