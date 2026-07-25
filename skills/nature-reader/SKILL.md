---
name: nature-reader
description: >
  Build a full-text Chinese-English parallel, figure-aware, source-anchored
  Markdown reader for academic papers (PDF/DOI/arXiv/publisher HTML).
  Use when user wants to "read this paper", "create a reading note",
  "build a bilingual reader for this paper".
---

# Nature Reader

Build a structured Markdown reading of an academic paper.

## Output Format

```markdown
# [Paper Title]

**Authors:** [Authors]
**Journal/Preprint:** [Source]
**DOI/arXiv:** [Identifier]
**Publication Date:** [Date]

---

## Abstract (English / 中文)

[Original abstract] / [Chinese translation]

---

## 1. Introduction

### Key Claim
[What is the paper trying to prove?]

### Background
[What prior work does this build on? — with citations linked]

### Innovation
[What's new here?]

---

## 2. Methods (if applicable)

[Summary of approach — enough to understand results, not replicate]

---

## 3. Results

### Figure 1: [Title]
- What it shows: [description]
- Key takeaway: [insight]

### Figure 2: [Title]
...

---

## 4. Discussion

### Main Findings
- [Finding 1]
- [Finding 2]

### Limitations (stated by authors)
- [Limitation]

### Implications
[So what? Why does this matter?]

---

## 5. My Notes
- [Personal thoughts, connections to other work, questions]
```

## Reading a PDF
If the paper is a PDF:
1. Extract text (use PDF tools if available)
2. Identify figures by their captions
3. Build the reader section by section

## Reading from DOI/arXiv
If a DOI or arXiv ID is given:
1. Search for the paper metadata
2. Attempt to access the full text if available
3. Build the reader from available information

## Bilingual Support
- Translate section headings to Chinese
- Provide Chinese summaries alongside English originals
- Keep technical terms in English with Chinese explanation
