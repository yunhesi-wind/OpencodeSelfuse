---
name: to-issues
description: >
  Break plans/specs/PRDs into independent, grabbable issues using tracer-bullet vertical slices.
  Use when user has a plan or spec and wants to break it into implementable tickets.
---

# To Issues

Break a plan, spec, or PRD into discrete, independently-implementable issues.

## Tracer-Bullet Approach

Instead of horizontal layers (build all models → all controllers → all views),
create vertical slices. Each issue delivers a thin, working slice of the full feature.

## Process

### 1. Understand the Spec
Read the plan/spec/PRD. Identify:
- Core user flows (the happy paths)
- Supporting flows (edge cases, error states)
- Infrastructure needs (auth, persistence, external services)

### 2. Identify the Tracer Bullet
What is the THINNEST end-to-end path through the system for the primary use case?
This is Issue #1. It should be functional but minimal.

### 3. Decompose
For each issue, define:

```
## Issue: [Title]

**Goal:** One sentence on what this delivers
**Input:** What the issue starts with (existing code, API, data)
**Output:** What the issue ends with (working feature, test, endpoint)
**Verification:** How to confirm it's done
**Depends on:** #[issue numbers] or "none"
**Estimated effort:** S / M / L / XL

**Implementation hints:**
- Files to create/modify
- Key design decisions
- Tests to write
```

### 4. Order the Issues
- Tracer bullet first (Issue #1)
- Dependencies dictate order
- Each issue should be completable in 2-4 hours
- Issues too large → split further

## Output
A numbered list of issues, each with the template above, ready to file in GitHub.
