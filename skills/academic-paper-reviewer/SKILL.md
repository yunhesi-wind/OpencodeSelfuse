---
name: academic-paper-reviewer
description: >
  Multi-perspective academic paper review. Simulates 5 independent reviewers
  (EIC + 3 peer reviewers + Devil's Advocate). Supports full review, re-review,
  quick assessment, methodology focus, Socratic guided review, calibration mode.
  Use when user wants "review my paper", "审稿", "pre-submission review".
---

# Academic Paper Reviewer

Multi-perspective simulated peer review. 5 reviewer personas provide independent
assessments, then consensus is synthesized.

## Reviewer Personas

| Role | Focus |
|------|-------|
| **EIC** (Editor-in-Chief) | Overall significance, novelty, fit for journal |
| **Reviewer 1** (Methods expert) | Methodology rigor, statistics, reproducibility |
| **Reviewer 2** (Domain expert) | Literature context, interpretation, implications |
| **Reviewer 3** (General reviewer) | Clarity, logic, presentation |
| **Devil's Advocate** | Find every possible weakness and alternative explanation |

## Review Modes

| Mode | Description |
|------|-------------|
| **full** | All 5 reviewers provide detailed reviews → consensus |
| **re-review** | Review against previous comments |
| **quick** | Single assessment of key concerns |
| **methodology** | Focused on methods section only |
| **socratic** | Interactive guided review with user |

## Process

### Step 1: Assign Roles
Dispatch 5 parallel `task` subagents, each with a persona prompt:
- "You are Reviewer 1 (Methods expert). Focus on: experimental design, sample size, statistical tests, reproducibility..."
- "You are the Devil's Advocate. Find every weakness:..."

### Step 2: Collect Reviews
Each reviewer produces:
```markdown
## Overall Assessment
[1-2 paragraphs]

## Major Concerns (numbered)
1. [Concern]: [Evidence and suggested fix]

## Minor Concerns (numbered)
1. [Concern]: [Evidence and suggested fix]

## Recommendation
[Accept / Minor Revision / Major Revision / Reject]
```

### Step 3: Synthesize
Combine all 5 reviews:
- Identify overlapping concerns (reviewers agree → higher priority)
- Resolve conflicting opinions
- Produce unified review report with consensus score

### Step 4: Present
```markdown
# Peer Review Report

## Reviewer Consensus
- Major concerns with agreement: N
- Unique concerns: N
- Recommendation summary

## Detailed Reviews
[Each reviewer's assessment appended]
```

## Rules
- Each reviewer must cite SPECIFIC sections/lines
- Criticism must be actionable (suggest HOW to fix)
- Devil's Advocate must find at least 3 issues
- EIC decides final recommendation after reading all reviews
