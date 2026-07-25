---
name: grill-with-docs
description: >
  Challenge plans against existing domain models and documentation.
  Syncs CONTEXT.md and ADRs. Use when reviewing plans that reference
  existing project documentation or architecture decisions.
---

# Grill With Docs

Challenge plans by cross-referencing against existing documentation. Every claim
must be consistent with the documented domain model and architecture decisions.

## Process

1. **Load Context**: Read CONTEXT.md (domain model, glossary, conventions) and relevant ADRs
2. **Cross-Reference**: For each claim in the plan, check:
   - Does it use domain terms correctly from the glossary?
   - Does it respect existing ADR decisions?
   - Does it introduce contradictions?
3. **Flag Issues**:
   - Terminology drift: using different words for the same concept
   - ADR violations: proposing something an ADR explicitly rejected
   - Gap: the plan assumes something not documented (documentation gap)
4. **Sync**: After resolution, update CONTEXT.md and ADRs to reflect new decisions
