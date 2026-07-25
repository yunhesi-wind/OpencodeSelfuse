---
name: review
description: >
  Dual-dimension code review: Standards (coding conventions compliance) + Spec (requirements matching).
  Two parallel reviews combined into one report. Use when user says "review my code",
  "code review", "check this pull request", or wants a structured review.
---

# Review

Dual-dimension code review: Standards + Spec. Run both in parallel and combine.

## Dimension 1: Standards Review
Check code against coding conventions:
- Naming: variables, functions, classes follow project conventions?
- Structure: files organized logically? Functions single-purpose?
- Error handling: errors caught and handled? Not swallowed silently?
- Logging: useful for debugging? Not leaking secrets?
- Type safety: types used correctly? Any unsafe casts or type assertions?
- Security: input validated? SQL injection? XSS? Auth checks in place?
- Performance: obvious N+1 queries? Unnecessary allocations? Memory leaks?

## Dimension 2: Spec Review
Check code against requirements:
- Does it do what was asked?
- Are edge cases from the spec handled?
- Is anything missing?
- Is anything extra (scope creep)?

## Output Format

```
## Review Summary
- [Pass/Warn/Fail] Standards: N issues found
- [Pass/Warn/Fail] Spec: N issues found

## Standards Issues
### [Severity] Issue Title
File: path/to/file:line
Problem: ...
Fix: ...

## Spec Issues
### [Severity] Issue Title
Requirement: ...
Problem: ...
Fix: ...

## Recommendations
- Quick wins (low effort, high impact)
- Deeper improvements to consider
```

## Severity Levels
- CRITICAL: Security hole, data loss, or spec violation that blocks release
- MAJOR: Bug or maintainability issue
- MINOR: Style nit, suggestion
