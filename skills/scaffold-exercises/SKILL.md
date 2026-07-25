---
name: scaffold-exercises
description: >
  Create exercise directory structures with chapters, questions, answers, and explanations.
  Use when user wants to "create exercises", "scaffold practice problems",
  "build a coding exercise", or set up a learning resource structure.
---

# Scaffold Exercises

Create structured exercise directories for learning and practice.

## Directory Structure

```
exercises/
├── README.md              # Exercise set overview
├── chapter-01-basics/
│   ├── README.md          # Chapter overview and learning objectives
│   ├── 01-first-exercise/
│   │   ├── README.md      # Problem statement
│   │   ├── starter/       # Starter code (what student starts with)
│   │   ├── solution/      # Solution code
│   │   └── explanation.md # Walkthrough explanation
│   ├── 02-second-exercise/
│   │   └── ...
│   └── chapter-review.md  # Key takeaways and self-assessment
├── chapter-02-advanced/
│   └── ...
└── final-project/
    ├── README.md
    └── ...
```

## Exercise Template

### README.md (per exercise)
```markdown
# [Exercise Title]

**Difficulty:** Beginner / Intermediate / Advanced
**Estimated Time:** [X] minutes

## Objective
[One sentence: what will you learn?]

## Background
[Brief context — why does this matter?]

## Requirements
1. [Specific, testable requirement]
2. [Specific, testable requirement]
3. [Specific, testable requirement]

## Starter Code
See `starter/` directory.

## Expected Output
```
[Show what success looks like]
```

## Hints
- [Hint 1 (only if stuck)]
- [Hint 2 (more specific)]

## Testing Your Solution
```bash
[How to run tests]
```

## Stretch Goals (optional)
- [Extra challenge for fast learners]
```

### explanation.md (per exercise)
```markdown
# [Exercise Title] — Explanation

## Step-by-Step Solution

### Step 1: [What to do first]
[Explanation and code]

### Step 2: [What to do next]
[Explanation and code]

## Common Mistakes
- **Mistake:** [description]
  **Why it happens:** [explanation]
  **Fix:** [solution]

## Key Takeaways
- [Learning point 1]
- [Learning point 2]
```

## Chapter Review Template
```markdown
# Chapter [N] Review: [Topic]

## Key Concepts Covered
- [Concept 1]: [one-line summary]
- [Concept 2]: [one-line summary]

## Self-Assessment
- [ ] I can [skill]
- [ ] I can [skill]

## Further Reading
- [Resource link or reference]
```
