---
name: diagnose
description: >
  Systematic bug diagnosis loop: reproduce → minimize → hypothesize → instrument → fix → regression test.
  Use when user reports a bug, says "something is broken", "debug this", or "why does this fail?".
---

# Diagnose

Systematic bug diagnosis. No guessing. No random changes. Follow the process.

## The Loop

```
Reproduce → Minimize → Hypothesize → Instrument → Fix → Regression Test
     ↑                                                       |
     └───────────────────────────────────────────────────────┘
```

## Phase 1: Reproduce
Goal: See the bug happen reliably.
- Ask user for exact steps to reproduce
- If no steps: ask for input, expected output, actual output
- Record: exact error message, stack trace, environment
- If cannot reproduce: ask user for more details; do NOT guess

## Phase 2: Minimize
Goal: Smallest possible reproduction case.
- Remove unrelated code, data, or configuration
- Binary search: comment half the code, does bug still happen?
- Result should be a minimal script/input that triggers the bug
- State the minimal reproduction clearly

## Phase 3: Hypothesize
Goal: Form a testable theory about WHY.
- List possible root causes (at least 2, never settle on first guess)
- For each cause: what evidence would confirm it? What would disprove it?
- Rank by likelihood

## Phase 4: Instrument
Goal: Gather evidence to narrow down root cause.
- Add logging/tracing at decision points
- Use assertions to catch invariant violations early
- Check intermediate values manually
- Report findings: which hypothesis gained/lost support

## Phase 5: Fix
Goal: Address the root cause, not the symptom.
- Write the minimal fix
- Explain WHY this fixes it (not just what changed)
- Check for similar patterns elsewhere in the codebase

## Phase 6: Regression Test
Goal: Prove the fix works and won't break again.
- Run the minimal reproduction — bug must not occur
- Run existing tests — no regressions
- Write new test that specifically catches this bug
- Verify fix handles edge cases

## Rules
- Never skip Phase 1 (Reproduce). If you can't see the bug, you can't fix it.
- Never apply a fix without understanding WHY it works.
- Always add a regression test.
