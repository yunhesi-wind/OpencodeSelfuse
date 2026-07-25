---
name: nature-paper-to-patent
description: >
  Convert scientific papers/theses/technical reports into structured Chinese
  invention patent drafts. Generate independent claims, specification,
  abstract, and abstract figure documents.
  Use when user wants to "turn paper into patent", "写专利", "paper to patent".
---

# Nature Paper To Patent

Convert academic papers into Chinese invention patent drafts (发明专利).

## Patent Document Structure

According to CNIPA (国家知识产权局) requirements:
1. **权利要求书** (Claims) — Independent claims + dependent claims
2. **说明书** (Specification) — Technical field, background, summary, drawings, embodiments
3. **摘要** (Abstract) — Under 300 characters
4. **摘要附图** (Abstract Figure) — Most representative figure

## Conversion Process

### Step 1: Extract Core Invention
From the paper, identify:
- Technical problem being solved (要解决的技术问题)
- Technical solution (技术方案) — the HOW
- Technical effect (技术效果) — the improvement over prior art
- The key innovation — what's NOVEL and INVENTIVE

### Step 2: Draft Claims

#### Independent Claim 1 (独立权利要求)
```
一种[方法/装置/系统]，其特征在于，包括：
步骤1: [核心技术步骤];
步骤2: [核心技术步骤];
...
步骤N: [核心技术步骤]。
```

Rules for claims:
- One sentence per claim element, separated by semicolons
- Define the invention by its STRUCTURE or STEPS, not by its purpose
- Use "所述" (said) for previously introduced elements
- Avoid vague terms like "approximately", "about", "preferably"

#### Dependent Claims (从属权利要求)
```
根据权利要求1所述的[方法/装置]，其特征在于，[additional feature]。
```

### Step 3: Draft Specification

```markdown
# 说明书

## 技术领域
本发明涉及[领域]，具体涉及[具体方向]。

## 背景技术
[Problem in prior art. Cite specific deficiencies.]
[Why existing solutions are inadequate.]

## 发明内容
### 要解决的技术问题
[One sentence statement]

### 技术方案
[Summarize the independent claim in plain language]

### 有益效果
[At least 3 specific measurable benefits:
1. [Technical effect with mechanism]
2. [Quantifiable improvement if available]
3. [Comparative advantage]
]

## 附图说明
图1: [Description of Figure 1]
图2: [Description of Figure 2]

## 具体实施方式
[Detailed description of each embodiment]
[Reference to figures by number]
[Explain WHY each step works, not just WHAT]
```

### Step 4: Draft Abstract
- Under 300 Chinese characters
- Format: "[发明名称]属于[技术领域]。包括步骤A、B、C。解决了[问题]，实现了[效果]。"
- Include key numerical results if applicable

## Warning
This is a DRAFTING TOOL, not a legal service. The output:
- Is a starting point for review by a patent attorney
- May need additional claims for defensive coverage
- Must be reviewed for compliance with CNIPA examination guidelines
- Should have novelty search conducted before filing

## Language Rules
- Claims: formal legal Chinese, no colloquialisms
- Specification: technical but clear Chinese
- No first-person pronouns in claims (本发明 not 我们)
- Use "所述" consistently for back-references
