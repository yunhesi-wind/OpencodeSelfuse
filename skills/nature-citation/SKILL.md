---
name: nature-citation
description: >
  Add rigorous Nature/CNS citations to manuscripts. Split long paragraphs
  into citable segments and search Nature Portfolio journals.
  Use when user needs to "add Nature citations", "cite properly for Nature submission",
  "format references for CNS journals".
---

# Nature Citation

Add and format citations for Nature/CNS journal submissions.

## Citation Principles

### 1. Every Claim Needs a Source
- Factual claims → primary literature citation
- Methods → original method paper citation
- Software/tools → version-specific citation or URL
- Data → dataset DOI or repository accession

### 2. Prioritize Original Sources
- Cite the paper that FIRST reported the finding, not the review that summarized it
- Cite primary research over reviews over textbooks
- When in doubt, cite the original

### 3. Nature Citation Format
Nature uses numbered references: `[1]`, `[2,3]`, `[4-7]`
References are numbered in order of first appearance.

### 4. Paragraph-to-Citation Mapping
For each long paragraph:
1. Identify distinct factual claims
2. Each claim should have a supporting citation
3. If a paragraph has uncited claims, flag them
4. Suggest where citations are needed

## Citation Search Strategy
For each claim needing a citation:
1. Search for the specific finding, not the general topic
2. Prefer papers from the last 5 years (unless citing foundational work)
3. Verify the citation actually supports the claim (don't cite blindly)
4. Flag citations that need verification: "[NEEDS VERIFICATION: claim does not appear in abstract]"

## Output
```markdown
## Citation Audit

### Missing Citations
- Line [X]: "[claim]" → Suggested search: [search terms]
- Line [Y]: "[claim]" → Suggested citation: [author, year, DOI] (needs verification)

### Weak Citations
- Line [Z]: "[claim]" currently cited with [ref] → This is a review. Consider citing the original: [suggestion]

### Citation Formatting Issues
- [Issue with numbering, style, etc.]
```
