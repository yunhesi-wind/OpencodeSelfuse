---
name: nature-paper2ppt
description: >
  Build complete Nature-style Chinese PPTX presentations from scientific papers.
  Includes self-review/correction loop. Use when user says
  "make a PPT from this paper", "Nature-style presentation",
  "create slides from my paper".
---

# Nature Paper2PPT

Build presentation slides from an academic paper.

## Slide Structure (Standard 10-15 slides)

1. **Title Slide**: Paper title, authors, journal, presenter
2. **Background**: Why this matters (1-2 slides)
3. **Knowledge Gap**: What was unknown (1 slide)
4. **Research Question/Hypothesis**: What we set out to test
5. **Approach Overview**: Visual summary of methods
6-9. **Key Results**: One main finding per slide, with figure
10. **Summary of Findings**: Bullet points of all key results
11. **Discussion/Implications**: So what?
12. **Limitations & Future Work**
13. **Acknowledgments/References**

## Style Rules
- One message per slide (if a slide has two messages, split it)
- Maximum 6 bullet points per slide, maximum 6 words per bullet
- Figures better than tables, tables better than text
- Use slide notes for what the presenter should SAY (not what's on the slide)
- Color scheme: clean, professional (Nature blue theme)

## Creation Process
1. Read the paper and extract key messages
2. Propose slide structure → ask user to confirm
3. Generate slides one by one
4. Self-review: check for text overflow, figure clarity, logical flow
5. Ask user to review → incorporate feedback

## Tool
Use `python-pptx` to generate the PPTX file if available. Otherwise
create a markdown-based slide plan that can be manually built.
