---
name: nature-polishing
description: >
  Polish, restructure, or translate academic prose into Nature-style English
  using writing strategy principles. Includes LaTeX formatting fixes.
  Use when user wants "Nature-level polishing", "polish my paper like Nature",
  "improve academic English to Nature standards".
---

# Nature Polishing

Polish academic text to meet Nature journal standards for clarity, concision, and precision.

## Nature Style Principles

### 1. Clarity Above All
- The reader must understand every sentence on first reading
- Replace "As can be seen from the data presented in Figure 2..." → "Figure 2 shows..."
- No sentence should require re-reading

### 2. Concision
- Nature papers are short. Every word must earn its place.
- Cut: "It is interesting to note that" → (delete entirely)
- Cut: "Our results provide evidence supporting the hypothesis that" → "Our results support"
- Target: 10-20% shorter than the original

### 3. Precision
- "Significant" means statistically significant (p < 0.05) — don't use it casually
- "Demonstrate" > "show" > "suggest" > "indicate" (pick the right strength)
- Numbers: "approximately 37%" not "about 37%"; "increased by 2.3-fold" not "more than doubled"

### 4. Active Voice
- Prefer active: "We observed..." not "It was observed that..."
- But passive is OK for methods: "Samples were incubated at 37°C" (who did it doesn't matter)

### 5. Structure
- Title: Descriptive, no jargon, < 15 words
- Abstract: Background (1-2 sentences), Results (3-4), Conclusion (1)
- Introduction: Known → Unknown → Hypothesis → Approach
- Results: Present findings, not interpret them
- Discussion: Interpret findings, don't repeat results
- Methods: Enough detail for replication

## LaTeX Fixes
When polishing LaTeX:
- Check for unescaped special characters (%, &, _, $, #)
- Ensure consistent citation style: `\cite{ref}` vs `\citep{ref}`
- Fix figure references: `Fig.~\ref{fig:label}` not "Figure 1"
- Remove manual formatting hacks (use proper commands instead)
