---
name: improve-codebase-architecture
description: >
  Discover deepening opportunities in a codebase based on CONTEXT.md domain language
  and ADR decisions. Use for architecture review, technical debt discovery,
  or when user asks "how can I improve the architecture?"
---

# Improve Codebase Architecture

Find architectural improvement opportunities by analyzing the codebase against
its documented domain model and decisions.

## Analysis Framework

### 1. Domain Language Alignment
- Do class/function names match the glossary in CONTEXT.md?
- Are domain concepts properly isolated (bounded contexts)?
- Is business logic leaking into infrastructure code?

### 2. Architecture Decision Compliance
- Check code against each ADR:
  - Are patterns from the ADR consistently applied?
  - Are there exceptions that should be documented?
  - Has the codebase evolved beyond an ADR (ADR drift)?

### 3. Modularity Assessment
- Where are the coupling hotspots? (files changed together frequently)
- What modules have the most dependencies (instability metric)?
- Can any module be extracted to a separate package?

### 4. Simplification Opportunities
- Dead code: unreachable paths, unused exports
- Over-engineering: patterns that add complexity without benefit
- Duplication: same logic in multiple places

### 5. Evolution Readiness
- What change would break the most things?
- Where would a new developer get confused?
- What can't be tested in isolation?

## Output
- Prioritized list of opportunities (high/medium/low impact)
- For each: what to change, why, and the risk
- Quick wins (low effort, high impact) listed separately
