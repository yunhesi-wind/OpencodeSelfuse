---
name: triage
description: >
  State-machine driven issue triage. Categorize, prioritize, and assign issues
  through a structured triage role. Use when user has a backlog of issues
  that need triaging or says "triage these issues".
---

# Triage

State-machine driven issue triage. Move each issue through a defined workflow.

## Triage States

```
New → Reproduced → Triaged → Ready
  ↘ Invalid    ↘ Duplicate
```

## Triage Process (per issue)

### 1. Validate
- Can the issue be understood? If no → ask for clarification, label `needs-info`
- Is it a real issue? If no → close as `invalid` with explanation
- Is it a duplicate? If yes → close as `duplicate`, link to original

### 2. Reproduce
- Can the described behavior be reproduced?
- Mark `reproduced` or `needs-repro`
- If actionable without reproduction (documentation, feature request) → skip

### 3. Categorize
Assign labels:
- **Type**: bug / feature / docs / refactor / question
- **Priority**: P0 (drop everything) / P1 (this sprint) / P2 (next sprint) / P3 (backlog)
- **Component**: which part of the system?

### 4. Size
Estimate effort: S (< 1 day) / M (1-3 days) / L (3-5 days) / XL (> 5 days / needs design)

### 5. Assign
If an obvious owner exists, suggest them. Otherwise leave unassigned.

## Triage Output
For each issue:
```
Issue #[number]: [title]
State: [New → Reproduced → Triaged → Ready]
Type: [bug/feature/...] Priority: [P0-P3] Size: [S-XL]
Decision: [action taken]
Next step: [what should happen next]
```

## Rules
- When in doubt, ask the reporter before making assumptions
- A closed issue is better than a stale issue
- If unsure about priority, default to P3 (backlog) — it can be raised later
