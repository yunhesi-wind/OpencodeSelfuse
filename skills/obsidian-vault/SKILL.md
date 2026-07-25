---
name: obsidian-vault
description: >
  Search, create, and manage notes in an Obsidian vault (with wikilinks and index notes).
  Use when user says "manage my Obsidian vault", "create a note in Obsidian",
  "search my vault", or references their Obsidian workspace.
---

# Obsidian Vault

Manage notes in an Obsidian vault. All files are Markdown with wikilinks.

## Vault Structure
Obsidian vaults are directories of Markdown files. Key conventions:
- `[[wikilink]]` syntax links to other notes
- `![[note]]` embeds a note
- Tags: `#tag` or frontmatter `tags: [tag1, tag2]`
- Frontmatter (YAML between `---` delimiters) for metadata
- Daily notes: typically `YYYY-MM-DD.md`
- Templates: reusable note structures

## Operations

### Create a Note
```markdown
---
created: YYYY-MM-DD
tags: [tag1, tag2]
---

# Title

Content with [[wikilinks]] to related notes.

## References
- [[related-note-1]]
- [[related-note-2]]
```

### Search the Vault
- Full-text search across all .md files
- Filter by tag: search for `tags: [tagname]` in frontmatter
- Find backlinks: search for `[[note-name]]` to find all notes linking to a note
- Find orphans: notes with no incoming links

### Create Index Notes (MOCs)
Maps of Content organize related notes:
```markdown
# Topic MOC

## Core Concepts
- [[concept-1]]
- [[concept-2]]

## Sub-topics
- [[subtopic-a]]
- [[subtopic-b]]

## Related
- [[tangential-note]]
```

### Maintain the Vault
- Find broken wikilinks (links to non-existent notes)
- Find orphan notes (no incoming links)
- Suggest note splitting (notes > 500 lines)
- Suggest note merging (short notes on same topic)
- Update outdated frontmatter

## Rules
- Never delete notes without user confirmation
- Always use `[[wikilink]]` syntax for internal links
- Preserve existing frontmatter when editing notes
