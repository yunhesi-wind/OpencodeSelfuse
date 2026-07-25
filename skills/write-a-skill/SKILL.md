---
name: write-a-skill
description: >
  Create new agent skills with proper structure, progressive disclosure, and bundled resources.
  Use when user wants to create a new skill, says "write a skill for...",
  "create a skill that...", or wants to improve an existing skill.
---

# Write A Skill

Create or improve agent skills following best practices.

## Skill Structure

Every skill is a directory containing:

```
skill-name/
└── SKILL.md    # Required: the skill definition
```

## SKILL.md Format

```markdown
---
name: skill-name
description: >
  When to use and what it does. First sentence = trigger condition.
  Use when user says X, asks for Y, or mentions Z.
---

# Skill Title

[Progressive disclosure: most important info first, details later]
```

## Writing Principles

### 1. Progressive Disclosure
- First line: when to activate (trigger)
- First section: the core workflow (what to do NOW)
- Later sections: edge cases, details, references
- An agent should be able to start working after reading only the first 20% of the skill

### 2. Be Specific
- "Search for N+1 queries" → "Look for loops that call `.find()` or `.get()` inside `.map()` or `.forEach()`"
- "Handle errors" → "Wrap in try/catch, log error.message, return 500 with error ID"

### 3. Give Examples
- Show a bad example and a good example
- Show the expected output format
- Include a complete mini-workflow

### 4. Define Boundaries
- When NOT to use this skill
- When to hand off to another skill
- What this skill explicitly does NOT do

### 5. Match Agent Capabilities
- Map actions to specific tools the agent can use
- Don't say "search the web" if the agent can't access a browser
- Reference MCP tools, bash commands, or file operations the agent actually has

## Testing a Skill
After creating, test:
1. Does the agent correctly identify WHEN to use it?
2. Does the agent follow the workflow in order?
3. Does the agent respect boundaries?
4. Is the output format consistent?

## Anti-Patterns
- Too long: if >200 lines, split into multiple skills
- Too vague: "be helpful" is not an instruction
- Tech-specific: "use Docker" when the user might not have Docker
- Tool hallucination: referencing tools the agent doesn't have
