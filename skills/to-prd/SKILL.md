---
name: to-prd
description: >
  Convert conversation context into a Product Requirements Document and publish to
  the project issue tracker. Use when user has discussed a feature extensively
  and wants a formal PRD.
---

# To PRD

Convert the current conversation into a structured Product Requirements Document.

## Process

### 1. Extract from Conversation
Review the conversation history. Extract:
- Problem statement (what pain are we solving?)
- User stories (who wants what and why?)
- Proposed solution (what was discussed?)
- Constraints (what limits apply?)
- Open questions (what was NOT decided?)

### 2. Fill Gaps
Ask the user for any missing pieces:
- "Who is the primary user persona?"
- "What does success look like? How do we measure it?"
- "What is explicitly OUT of scope for v1?"

### 3. Write the PRD

```markdown
# PRD: [Feature Name]

## Problem
[1-2 paragraphs on the problem and why it matters]

## Users
- **Primary**: [who they are, what they need]
- **Secondary**: [if applicable]

## Requirements

### Functional
- [ ] F1: [Requirement] — Priority: P0/P1/P2
- [ ] F2: [Requirement] — Priority: P0/P1/P2

### Non-Functional
- Performance: [expectations]
- Security: [requirements]
- Accessibility: [requirements]

## User Flow
1. [Step-by-step primary flow]

## Out of Scope (v1)
- [explicitly excluded items]

## Success Metrics
- [measurable outcomes]

## Open Questions
- [ ] [question]
```

### 4. Publish
File the PRD as a GitHub issue with label "prd" or "spec".
If `gh` CLI is available, use it. Otherwise save the file.
