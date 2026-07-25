---
name: academic-pipeline
description: >
  Full academic research orchestrator: research → write → integrity check →
  review → revise → re-review → final check → publish.
  Coordinates deep-research, academic-paper, and academic-paper-reviewer skills.
  Use when user wants "full paper pipeline", "end-to-end paper production".
---

# Academic Pipeline

End-to-end academic paper production pipeline. Orchestrates 3 skills in sequence:
`deep-research` → `academic-paper` → `academic-paper-reviewer`.

## Pipeline Stages

```
Stage 1: Research ───── deep-research skill
   │
Stage 2: Write ──── academic-paper skill (outline mode)
   │
Stage 3: Audit ──── Integrity check (citations, disclosures, data)
   │
Stage 4: Draft ──── academic-paper skill (full mode)
   │
Stage 5: Review ─── academic-paper-reviewer skill
   │
Stage 6: Revise ─── academic-paper skill (revision mode)
   │
Stage 7: Re-Review ─ academic-paper-reviewer (re-review mode)
   │
Stage 8: Finalize ─ Final formatting, proofread, submission-ready
```

## Stage Details

### Stage 1: Research
- Load `deep-research` skill
- User provides: research question / topic
- Output: literature review, key references, research gap

### Stage 2: Outline
- Load `academic-paper` skill (plan mode)
- User reviews and approves outline before continuing

### Stage 3: Integrity Audit
Check before writing:
- Are all key references real and verifiable?
- Are there disclosure requirements for this journal?
- Is the data availability statement prepared?
- Any ethical approvals documented?

### Stage 4: Draft
- Load `academic-paper` skill (full mode)
- Generate complete manuscript

### Stage 5: Review
- Load `academic-paper-reviewer` skill (full mode)
- 5-reviewer simulated review

### Stage 6: Revise
- Address all reviewer comments
- Track changes: comment → response → change

### Stage 7: Re-Review
- Verify all comments addressed
- Final quality check

### Stage 8: Finalize
- Format per target journal requirements
- Proofread for typos, formatting consistency
- Generate submission-ready files

## Progress Tracking
Use `todowrite` to track each stage:
```
[x] Research
[x] Outline
[x] Integrity Audit
[ ] Draft
[ ] Review
[ ] Revise
[ ] Re-Review
[ ] Finalize
```

## Rules
- Never skip a stage
- User must approve before moving from outline to draft
- Each stage loads the corresponding skill for detailed instructions
- If a stage fails (e.g., insufficient references), stop and report — don't proceed
