---
name: academic-paper
description: >
  Systematic academic paper writing pipeline using sub-agent orchestration.
  Supports 11 modes: full paper, plan, outline, revision, abstract, literature review,
  format conversion, citation check, disclosure, rebuttal audit, bilingual abstract.
  Supports 6 paper types, 5 citation formats, LaTeX/DOCX/PDF output.
  Use when user wants to "write a paper", "draft an academic paper", "论文写作".
---

# Academic Paper

Systematic paper writing using sub-agent orchestration. Each phase dispatches
a specialized subagent via the `task` tool.

## Modes

| Mode | Trigger | What It Does |
|------|---------|--------------|
| full | "write a paper" | Full pipeline: plan → draft → review → finalize |
| plan | "plan a paper" | Research question + outline only |
| outline | "create outline" | Section-level outline |
| revision | "revise this paper" | Improve existing draft |
| abstract | "write abstract" | Generate structured abstract |
| lit-review | "literature review" | Literature review section |
| format | "format paper" | Convert to target format (LaTeX/DOCX/PDF) |
| cite-check | "check citations" | Verify all citations |
| disclosure | "disclosure check" | Fund/conflict disclosure audit |
| rebuttal | "write rebuttal" | Reviewer response document |
| bilingual | "bilingual abstract" | Chinese + English abstract |

## Paper Types
- **Original Research**: IMRaD structure
- **Review**: Systematic review / meta-analysis
- **Case Study**: Case + discussion
- **Methods Paper**: Methods + validation
- **Perspective/Commentary**: Opinion + evidence
- **Short Communication**: Brief report

## Citation Formats
- APA 7th, MLA 9th, Chicago (author-date), Vancouver (numbered), IEEE

## Pipeline (Full Mode)

### Phase 1: Planning
Dispatch `task` subagent to:
1. Interview user for: topic, contribution, target journal, paper type
2. Generate research question statement
3. Search for key references
4. Produce section-level outline

### Phase 2: Drafting
For each section, dispatch parallel subagents:
- **Introduction agent**: Background → Gap → Hypothesis → Approach
- **Methods agent**: Structured methods (if applicable)
- **Results agent**: Data → analysis → reporting
- **Discussion agent**: Findings → context → limitations → implications

### Phase 3: Review
Dispatch review subagent:
- Check internal consistency (abstract matches conclusion, claims have evidence)
- Check formatting (citation style, figure references, section numbering)
- Check language (clarity, concision, academic tone)

### Phase 4: Finalize
- Generate final document in target format
- For LaTeX: compile and fix errors
- For DOCX: apply template formatting
- Check all citations resolve

## Output Format
- Plan mode: `outline.md` + `research_question.md`
- Full mode: `manuscript.{tex|docx}` + `references.bib`
- Abstract mode: abstract text block
- Rebuttal mode: point-by-point response document

## Tool Mapping
- "Dispatch subagent" → `task` tool with `subagent_type: "general"`
- "Search for references" → `context7` MCP + `webfetch`
- "Create todo/follow plan" → `todowrite`
- "Compile LaTeX" → `bash` with `pdflatex` if available
