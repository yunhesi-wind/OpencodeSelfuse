---
name: nature-academic-search
description: >
  Academic paper search and citation management. Use when user asks to search for papers,
  verify citations, deduplicate references, design PubMed/MeSH queries, parse DOIs/PMIDs,
  or export RIS/BibTeX/NBIB/ENW formats. Supports multi-source search across
  Crossref, PubMed, arXiv, OpenAlex, Europe PMC, Semantic Scholar, and ClinicalTrials.gov.
---

# Academic Paper Search

Organize reproducible searches. Treat records as evidence to verify. Never fabricate
paper metadata, citations, or trial information.

## Task Routing

| User Goal | Tool/Path | Completion Standard |
|---|---|---|
| Find papers, literature search, review screening | Search across sources | Deduplicate and report partial failures |
| Check clinical trial registrations | Trial-specific search | Return trial records, don't merge with papers |
| Verify identifiers | Lookup by DOI/PMID/arXiv | Match title, author, year, identifier |
| Generate citations | Citation formatter | Only for verified papers; no trial citations |
| Build PubMed queries | MeSH lookup | Confirm MeSH first, then combine free terms |
| Batch export reference files | Citation file tools | Follow reference workflow |

## Source Roles

- Default paper sources: Crossref, PubMed, arXiv, OpenAlex, Europe PMC
- Enrichment source: Semantic Scholar (only with strong identifiers like DOI/PMID)
- Trial source: ClinicalTrials.gov (only for trial searches, not papers)

## Execution Flow

1. Clarify topic, date range, document type, result count, preprint acceptance
2. Search across multiple sources
3. Check which sources succeeded/failed
4. Verify records with identifiers before citing
5. Mark verification status: verified, mismatch, not_found, manual_needed
6. Report papers, preprints, trials, and unresolved records separately
7. Export citations only for verified records

## Evidence Rules

- Never fabricate metadata, abstracts, citation counts, identifiers, or full-text conclusions
- Merge by strong identifiers; weak title matches must preserve conflicts
- Never describe preprints as peer-reviewed, trials as published research
- Don't silently relax queries when no results; report gaps explicitly
