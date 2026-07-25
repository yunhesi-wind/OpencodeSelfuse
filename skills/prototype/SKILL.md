---
name: prototype
description: >
  Build throwaway prototypes to validate designs before committing.
  Supports terminal apps and UI variants. Use when user says "prototype this",
  "build a quick proof of concept", or wants to test a design before building.
---

# Prototype

Build quick, throwaway prototypes to validate ideas. Prototypes are meant to be
discarded — their value is in the learning, not the code.

## Ground Rules
- Code is disposable. Write it fast, not clean.
- No tests required (unless testing IS the prototype)
- No error handling beyond what's needed to demonstrate the idea
- Hard-code values, skip config files, use in-memory storage
- Goal: answer a specific question in the shortest time

## Process

1. **Define the question**: What exactly are we trying to learn?
   - "Is this interaction pattern intuitive?"
   - "Can this algorithm handle the data shape?"
   - "Does this API design feel right to use?"

2. **Pick the fastest path**: Choose the stack that gets an answer fastest.
   - CLI tool: Bash script or Python
   - UI demo: Single HTML file with inline CSS/JS
   - API test: Minimal Express/Flask server
   - Data test: Jupyter notebook

3. **Build**: Timebox to 30 minutes or less. If it takes longer, scope is too big.

4. **Demonstrate**: Show the prototype working. Walk through what it proves.

5. **Decide**: Based on what was learned:
   - Proceed with real implementation?
   - Adjust the design?
   - Abandon the approach?

## Two Variants

### Terminal App Prototype
- Single-file script with minimal dependencies
- Focus on interaction flow, not output formatting
- Use `read`, `bash` tools for quick iteration

### UI Variant
- Single HTML file (self-contained, no build step)
- Inline CSS, inline JS
- Focus on layout and interaction, not visual polish
- Open in browser: the prototype IS the deliverable

## After the Prototype
- Summarize what was learned
- Recommend next steps
- Delete or archive the prototype code (it served its purpose)
