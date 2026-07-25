---
name: design-an-interface
description: >
  Generate multiple distinct interface designs for a module using parallel sub-agent comparison.
  Based on "Design It Twice" methodology. Use when user needs API/interface/module design
  options, wants design alternatives, or says "design an interface for...".
---

# Design An Interface

Generate multiple distinct interface designs and compare them.

## Philosophy
"Design It Twice" — the first design is rarely the best. By generating multiple approaches
and comparing them, you surface hidden trade-offs and find better solutions.

## Process

### Step 1: Understand Requirements
Ask the user:
1. What problem does this module solve?
2. Who will use it? (internal team, external developers, end users?)
3. What are the hard constraints? (performance, compatibility, language, dependencies?)
4. What does "good" look like? (simplicity? flexibility? speed? safety?)

### Step 2: Generate Designs (use parallel sub-agents)
For the SAME requirements, generate 3-4 different interface designs. Each design should:
- Have a distinct philosophy (e.g., minimal vs. configurable vs. functional vs. object-oriented)
- Include a concrete code example of usage
- List pros and cons

Design styles to consider:
- **Minimal**: Fewest functions/types, simplest API surface
- **Configurable**: Options struct/pattern, flexible behavior
- **Functional**: Pure functions, immutability, composable
- **Builder**: Fluent API, chain-able methods
- **Command**: Actions as data, command pattern
- **Adapter**: Thin wrapper over existing primitives

### Step 3: Compare
Present all designs side by side with:
- Code example for the same use case in each design
- Trade-off matrix: simplicity, flexibility, discoverability, testability, performance
- Recommendation with reasoning

### Step 4: Refine
Ask user which direction they prefer, then refine the chosen design.

## Rules
- All designs must satisfy the SAME requirements
- Each design must include error handling approach
- Never settle for a single design — always present alternatives
