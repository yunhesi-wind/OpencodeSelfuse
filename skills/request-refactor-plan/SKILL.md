---
name: request-refactor-plan
description: >
  Create detailed refactoring plans through user interview, broken into small commits,
  and filed as a GitHub issue. Use when user asks for a "refactoring plan",
  "how should I refactor this?", or wants a systematic approach to restructuring code.
---

# Request Refactor Plan

Create a detailed, commit-by-commit refactoring plan through structured interview.

## Process

### 1. Understand the Pain
"What hurts about this code right now?"

### 2. Define the Goal
"What does 'better' look like? Speed? Readability? Testability? Extensibility?"

### 3. Map the Territory
- Read the target code and its dependencies
- List what calls this code (callers) and what this code calls (dependencies)
- Identify test coverage (what has tests, what doesn't)

### 4. Design the End State
- Sketch the desired architecture
- Name the new abstractions
- Show before/after code snippets for key changes

### 5. Build the Plan
Break into sequential, independently-testable commits:

| Commit # | What | Why | Risk |
|----------|------|-----|------|
| 1 | Add missing tests first | Safety net | Low |
| 2 | Extract utility functions | Reduce duplication | Low |
| 3 | Rename for clarity | Align with domain language | Low |
| ... | ... | ... | ... |
| N | Biggest structural change | Core of refactor | High |

Rules for the commit sequence:
- Each commit must pass tests independently (never break the build)
- Smallest safe change first, riskiest change last
- If a step is risky, add a preceding safety step (add tests, add logging)

### 6. File as Issue
Consolidate the plan into a single issue with a checklist. Each commit = one checkbox.
User can work through them sequentially or delegate to an agent.
