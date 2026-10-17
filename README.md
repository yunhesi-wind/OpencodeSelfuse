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

## 桌面端 DS 美化（独立项目）

已整理为独立公开源码仓库：
[opencode-desktop-ds-theme](https://github.com/yunhesi-wind/opencode-desktop-ds-theme)。

本机独立项目：`D:\project\AI_test\opencode桌面端ds美化`。本配置仓库只保留描述和链接，不再二次保存主题项目。

- 深海女仆动态背景、透明顶栏、深蓝玻璃菜单和提问／权限面板。
- 半透明消息气泡和代码区；保留气泡发送状态变化、原生图标尺寸与差异状态。
- 当前主题版本 1.0.1：摘要面板、二级选择菜单与左上角菜单／子菜单统一 **60% 不透明度**；提问浮层 48%、代码底色 32%、已发送消息白灰底 62%。
- 显式覆盖摘要面板 `.session-summary-popover` 的原生透明底色，避免正文透出导致重叠。
- 版本／哈希／原生文件校验，原子 manifest 与备份发布，失败重试及独立恢复入口。
- 支持 Windows OpenCode Desktop **2.0.24 / 2.0.25 / 2.0.32**；2.0.32 已完成本机资源构建校验，18 个原生／unpacked 文件保持不变，25 项测试全部通过；视觉效果需安装后验收。不是官方插件，不支持跨版本恢复。
- 只发布源码；背景视频由用户确认权限后自行下载校验，应用包和备份仅在本机生成。
- 基于 daemon1s/opencode-deepseek-chan，保留原作者 MIT 署名；素材许可单独说明。
- 由 yunhesi-wind 维护，含 OpenAI GPT AI 辅助贡献，详见主题仓库声明。

在独立仓库执行 `npm ci --ignore-scripts`，按 README 下载素材后 `node deploy.cjs prepare`；
保存工作并完全退出桌面版，再运行 `Install-Theme.cmd`。异常时退出后运行 `Restore-Theme.cmd`。
OpenCode 更新到更高的已支持版本后（当前支持至 2.0.32），在主题仓库运行 `node deploy.cjs prepare --upgrade`，成功后安装；也可退出桌面版后运行 `Upgrade-Theme.cmd`。未知版本仍拒绝，不自动适配。
**不要将主题包、视频、备份或个人截图加入本配置仓库。**

维护约定：按下文「美化项目统一更新约定」执行；桌面主题的具体测试与构建检查清单见其 README 的「维护与同步要求」。

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

需在系统环境变量中设置：

| 变量名 | 用途 |
|--------|------|
| GITHUB_TOKEN | GitHub API 认证 |
| GITLAB_TOKEN | 极狐 GitLab 认证 |
| ASANA_ACCESS_TOKEN | Asana API 认证 |
| LINEAR_API_KEY | Linear API 认证 |
| CONTEXT7_API_KEY | Context7 可选，提高限流 |
