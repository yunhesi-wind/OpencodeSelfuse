---
name: ai-check
description: >
  Chinese academic AI writing rate detection. Generate a reference AI writing rate
  report (Word/DOCX). After user confirmation, apply AI-assisted revision.
  Use when user says "检测AI写作率", "AI率检测", "查AIGC", or wants to check
  AI writing percentage in Chinese academic text.
---

# AI Check

Detect AI writing patterns in Chinese academic text and generate a report.

## Detection Patterns

The following patterns contribute to higher AI detection scores:

### High-Risk Patterns
| Pattern | Example | Fix |
|---------|---------|-----|
| 模板化开头 | 随着...的发展... | 直接切入研究问题 |
| 机械三段式 | 首先...其次...最后... | 变化结构 |
| 空洞套话 | 具有重要的理论意义和实践价值 | 具体说明什么意义 |
| 过度连接词 | 因此, 所以, 从而, 进而 连续出现 | 删减或替换 |
| 翻译腔 | 通过...的方式, 在...的过程中 | 简化表达 |
| 被动滥用 | 被广泛应用于 | 改为主动 |
| 完美并列 | 不仅...而且...同时...还... | 拆分为短句 |

### Medium-Risk Patterns
- Sentences all between 30-50 characters
- Every paragraph has 3-5 sentences
- Every section has exactly 3 subsections
- References cited in perfect numerical order

## Report Generation

Create a DOCX report with:
1. Overall estimated AI rate (reference only, not a real detection tool)
2. Pattern-by-pattern analysis with counts
3. Highlighted problematic passages
4. Suggested rewrites for each flagged section

## Revision Process
1. Generate report → present to user
2. User confirms which sections to revise
3. Apply revisions section by section
4. Each revision: original → revised (preserving meaning and data)
5. Generate revised document

## Disclaimer
This is a reference analysis based on pattern matching, NOT a real AIGC detection
tool. Results are approximations for improvement guidance only.
