---
name: nature-data
description: >
  Prepare, audit, or revise Nature-level data availability statements, data
  repository plans, dataset citations, and FAIR metadata checklists.
  Use when user needs a "data availability statement",
  "Nature data compliance", "FAIR data checklist", or data management plan.
---

# Nature Data

Prepare and audit data availability statements and data management for
Nature journal submissions.

## Data Availability Statement
Required by Nature. Must cover ALL data types in the paper.

Template:
```
Data availability: The data that support the findings of this study are
available from the corresponding author upon reasonable request.
[OR] The [data type] data have been deposited in [repository name] under
accession code [identifier].
[OR] Source data are provided with this paper.
```

## Data Types Checklist

| Data Type | Repository Options | Requirement |
|-----------|-------------------|-------------|
| Sequencing | GEO, SRA, ArrayExpress, GSA | Mandatory deposit |
| Proteomics | PRIDE, MassIVE | Mandatory deposit |
| Structures | PDB, EMDB | Mandatory deposit |
| Microarray | GEO, ArrayExpress | Mandatory deposit |
| Code/Software | GitHub, Zenodo, Code Ocean | Strongly encouraged |
| Microscopy | BioImage Archive, EMPIAR | Encouraged |
| Clinical trials | ClinicalTrials.gov, EU CTR | Mandatory registration |
| Survey data | ICPSR, Dataverse | Encouraged |

## FAIR Principles Audit
- **F**indable: Does each dataset have a persistent identifier (DOI, accession)?
- **A**ccessible: Can the data be accessed? Is authentication needed?
- **I**nteroperable: Are standard formats and vocabularies used?
- **R**eusable: Is the license clear? Is provenance documented?

## Audit Output
```markdown
## Data Compliance Audit

### Missing Data Statements
- [Data type]: No availability statement provided. Suggested: [statement]

### Repository Gaps
- [Data type]: Should be deposited in [repository]. Currently: [status]

### FAIR Score
- Findable: [OK/Gap]
- Accessible: [OK/Gap]
- Interoperable: [OK/Gap]
- Reusable: [OK/Gap]
```
