---
name: handoff
description: >
  Compress the current conversation into a handoff document for another agent
  to continue the work. Use when user says "handoff", "summarize for another agent",
  "create handoff doc", or needs to continue work in a new session.
---

# Handoff

Compress the current conversation into a document another agent can pick up.

## What to Include

```markdown
# Handoff: [Brief Description]

## Goal
[One sentence: what are we trying to accomplish?]

## Current State
[Where are we right now? What's done? What's in progress?]

## Key Decisions Made
- [Decision]: [Rationale]
- ...

## Files Changed / Created
- `path/to/file`: [what was done and why]

## Next Steps
1. [Actionable next step]
2. ...

## Context to Preserve
[Anything another agent needs to know that isn't obvious from the code]

## Open Questions
- [ ] [Question waiting for answer]
```

## Rules
- Be concise — this is a scrap of context, not a novel
- Include specific file paths, branch names, and commands where possible
- Don't assume the next agent has access to this conversation history
- Write in a way an agent can immediately act on, not just understand
