---
name: tdd
description: >
  Test-Driven Development: Red-Green-Refactor cycle. Write failing test first,
  then minimal code to pass, then refactor. Use when user says "TDD",
  "write tests first", "red green refactor", or wants to follow TDD methodology.
---

# Test-Driven Development

Red → Green → Refactor. Always in this order. Never skip a step.

## The Cycle

### RED — Write a Failing Test
1. Write exactly ONE test for the next smallest piece of behavior
2. The test must be specific — test one thing, one scenario
3. Run the test — it MUST fail (if it passes, the test is wrong or the feature already exists)
4. Show the failing test output

### GREEN — Make It Pass
1. Write the MINIMAL code to make the test pass
2. No more, no less — resist the urge to add "obvious" improvements
3. Hard-code if necessary — you'll generalize in the next cycle
4. Run the test — it MUST pass
5. Run ALL tests — nothing else must break

### REFACTOR — Clean Up
1. Now improve the code while tests are green:
   - Remove duplication
   - Improve names
   - Extract methods/classes
   - Add types
2. Run tests after EACH refactoring step
3. If tests fail, undo and refactor differently

## Rules

- Never write code before writing a test for it
- If a test is hard to write, the design might be wrong — consider refactoring first
- Test behavior, not implementation — "does X happen" not "does method Y get called"
- One assertion per test when possible (logically grouped assertions are OK)
- Test names should describe the scenario: `test_when_[condition]_then_[result]`

## Anti-Patterns
- Writing multiple tests at once (write one, make it pass, then the next)
- Writing tests that pass immediately (they test nothing new)
- Skipping refactor because "it works" (that's how technical debt grows)
- Testing trivial code (getters/setters, framework glue)
