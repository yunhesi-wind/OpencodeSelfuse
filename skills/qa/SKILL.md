---
name: qa
description: >
  Interactive QA session: user reports bugs conversationally, agent files them as
  GitHub issues. Use when user wants to report bugs, do a QA walkthrough,
  or file structured bug reports.
---

# QA Session

Interactive bug reporting session. User describes bugs conversationally.
Agent captures them as structured issues.

## Process

### 1. Discovery
Ask the user to describe what they're testing and what they've observed.
"Walk me through what you're testing and what you've found so far."

### 2. Triage Each Bug
For each issue the user describes, capture:

| Field | Question |
|-------|----------|
| Title | "Give me a one-line summary" |
| Steps | "What exact steps do I follow to see this?" |
| Expected | "What should have happened?" |
| Actual | "What actually happened?" |
| Environment | Browser/OS/version? |
| Severity | Critical (blocker) / Major / Minor / Cosmetic |

### 3. Reproduce (if possible)
Ask permission to reproduce: "Can I try to reproduce this?"
If yes, attempt reproduction and confirm or add details.
If no, mark as "Not Reproduced" with user's description.

### 4. File the Issue
Present a draft issue:
```
Title: [user's summary]
Severity: [level]

**Steps:**
1. ...
2. ...

**Expected:** ...
**Actual:** ...

**Environment:** ...

**Reproduced:** Yes/No
```

Ask user to confirm before creating the GitHub issue.
Use `gh issue create` if GitHub CLI is available, or save drafts for manual filing.

## Rules
- One issue per bug — don't combine unrelated problems
- Don't diagnose or fix during QA — just capture
- If user is unsure about severity, suggest based on impact
