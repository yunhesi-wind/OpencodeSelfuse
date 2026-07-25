---
name: deep-research
description: >
  General deep research agent team. Multi-agent pipeline, 8 modes:
  full research, quick briefing, paper review, literature review,
  fact check, three-pass literature scan, Socratic guided research dialogue,
  systematic review with optional meta-analysis.
  Use when user wants "deep research", "comprehensive search", "研究综述".
---

# Deep Research

Multi-agent research pipeline. Each mode dispatches specialized subagents
via the `task` tool to produce rigorous, well-sourced research output.

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| **full** | "do deep research on X" | Comprehensive report with synthesis |
| **quick** | "quick briefing on X" | Executive summary, key findings |
| **paper-review** | "review this paper" | Structured paper critique |
| **lit-review** | "literature review on X" | Systematic literature survey |
| **fact-check** | "fact check this" | Claim-by-claim verification |
| **three-pass** | "three-pass scan on X" | Fast triage → deep read → synthesis |
| **socratic** | "guided research on X" | Interactive question-guided exploration |
| **systematic** | "systematic review on X" | PRISMA-compliant systematic review |

## Full Research Pipeline

### Stage 1: Scoping (1 agent)
- Clarify research question with user
- Define scope, time range, inclusion/exclusion criteria
- Identify key sources and databases

### Stage 2: Search (3 parallel agents)
- Agent A: Academic databases (Crossref, PubMed, arXiv via context7/web)
- Agent B: Grey literature (preprints, technical reports, patents)
- Agent C: News and industry sources

### Stage 3: Triage (1 agent)
- Merge results, deduplicate
- Score by relevance
- Select top-N for deep reading

### Stage 4: Deep Reading (N parallel agents)
- One agent per selected source
- Extract: key claims, methods, evidence, limitations
- Flag: conflicts with other sources

### Stage 5: Synthesis (1 agent)
- Integrate findings across sources
- Identify consensus, controversy, gaps
- Generate structured research report

### Stage 6: Verification (1 agent)
- Cross-check key claims against sources
- Verify statistics and quotes
- Flag uncertain findings

### Stage 7: Report (1 agent)
- Generate final report in requested format
- Include: executive summary, methodology, findings, gaps, references

## Output Format

```markdown
# [Research Question]

## Executive Summary
[3-5 sentence summary of findings]

## Methodology
- Databases searched: [list]
- Search terms: [terms]
- Date range: [range]
- Inclusion criteria: [criteria]
- Sources found: [N], Selected for review: [M]

## Key Findings
### [Finding 1]
**Consensus level:** High / Moderate / Contested
**Sources:** [citation 1], [citation 2]
**Details:** [explanation]

## Gaps and Uncertainties
- [Gap 1]
- [Gap 2]

## References
[Numbered reference list]
```

## Tool Mapping
- "Search databases" → `webfetch` + `context7` MCP
- "Search academic papers" → `nature-academic-search` skill
- "Dispatch parallel agents" → multiple `task` tool calls in parallel
- "Track research progress" → `todowrite`
- "Fact check claims" → cross-reference with original sources

## Rules
- Never fabricate data, citations, or statistics
- Flag all uncertain findings explicitly
- Distinguish between author claims and verified facts
- Report negative/null results, not just positive findings
- Disclose search limitations (databases not searched, language limits)
