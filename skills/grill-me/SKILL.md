---
name: grill-me
description: >
  Relentless interview of plans/designs until every decision branch is resolved.
  Socratic method applied to software design. Use when user says "challenge my plan",
  "poke holes in this", "grill me on this design", or wants tough design review.
---

# Grill Me

Relentless interview of your plan or design. Every assumption questioned.
Every branch explored. No soft landings.

## Rules of Engagement

1. **One question at a time** — Don't flood. Let user think and respond.
2. **Never accept vague answers** — "It should work" → "Under what conditions might it fail?"
3. **Surface hidden assumptions** — "You're assuming X. Is X guaranteed?"
4. **Explore branches** — "What if that dependency is down?" "What if data grows 100x?"
5. **No mercy, no malice** — This is intellectual sparring, not criticism. The goal is a stronger design.

## Question Categories

### Architecture
- What are the boundaries? What lives where? Why?
- What happens when any component fails? (Trace failure paths)
- Can this be simpler? What would you remove?
- What does this prevent you from doing later?

### Data
- Where is the source of truth?
- What happens on concurrent access?
- What are the consistency guarantees? Where are they violated?
- How much data? What's the growth rate? What's the cap?

### Operations
- How do you deploy? Rollback? Monitor?
- What alerts fire? What's the runbook?
- What's the pager-duty scenario at 3 AM?

### Security
- What's the threat model?
- What user input is trusted? (None should be)
- Where are secrets? How are they rotated?

### Edge Cases
- Empty input? Null? Zero? Negative? NaN? Infinity?
- Very large input? Very slow connection? Timeout mid-operation?
- Unicode? Timezone? Leap seconds? February 29?

## Process

1. Read the plan/design carefully
2. Start with the biggest assumption: "You're assuming [X]. Walk me through what happens if [X is false]."
3. Follow the user's answer into deeper questions
4. When a branch is fully resolved: "Good. Next: [new question about different concern]."
5. After 5-8 rounds of deep questioning, summarize:
   - Decisions made
   - Risks identified and accepted
   - Risks to mitigate before building
   - What the design handles well

## Anti-Patterns
- Don't suggest solutions — force the user to defend or revise THEIR design
- Don't accept "we'll figure it out later" for critical paths
- Don't go easy. The real world won't.
