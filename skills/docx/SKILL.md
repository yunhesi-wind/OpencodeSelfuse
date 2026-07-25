---
name: docx
description: >
  Word document (.docx) creation, reading, editing and manipulation.
  Supports table of contents, headings, page numbers, letterheads,
  and professional formatting. Use when user needs to work with Word files.
---

# DOCX Operations

Create, read, and edit Word documents using python-docx.

## Quick Reference

### Create a New Document
```python
from docx import Document
from docx.shared import Pt, Inches, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

doc = Document()

# Title
title = doc.add_heading("Document Title", level=1)
title.alignment = WD_ALIGN_PARAGRAPH.CENTER

# Paragraph with formatting
p = doc.add_paragraph()
run = p.add_run("This is bold, 12pt text.")
run.bold = True
run.font.size = Pt(12)
run.font.name = "Arial"

# Save
doc.save("output.docx")
```

### Read Existing Document
```python
doc = Document("input.docx")
for para in doc.paragraphs:
    print(f"[{para.style.name}] {para.text}")

# Read tables
for table in doc.tables:
    for row in table.rows:
        for cell in row.cells:
            print(cell.text)
```

### Add Table
```python
table = doc.add_table(rows=3, cols=3, style="Table Grid")
headers = ["Name", "Value", "Unit"]
for i, header in enumerate(headers):
    cell = table.rows[0].cells[i]
    cell.text = header
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True
```

### Add Picture
```python
doc.add_picture("image.png", width=Inches(4), height=Inches(3))
```

### Page Setup
```python
from docx.shared import Cm
section = doc.sections[0]
section.page_width = Cm(21)    # A4
section.page_height = Cm(29.7)
section.top_margin = Cm(2.5)
section.bottom_margin = Cm(2.5)
```

### Headers & Footers
```python
header = doc.sections[0].header
header.add_paragraph("Confidential Document")

footer = doc.sections[0].footer
p = footer.add_paragraph("Page ")
p.add_run().add_field('PAGE')  # Auto page number
p.add_run(" of ")
p.add_run().add_field('NUMPAGES')
```

### Table of Contents
```python
# Add TOC field (requires Word to update on open)
paragraph = doc.add_paragraph()
run = paragraph.add_run()
fldChar = OxmlElement('w:fldChar')
fldChar.set(qn('w:fldCharType'), 'begin')
run._r.append(fldChar)
# Word will render TOC when opened
```

### Styles & Themes
```python
# Apply heading styles
doc.add_heading("Section 1", level=1)
doc.add_heading("Subsection 1.1", level=2)

# List styles
doc.add_paragraph("Item 1", style="List Bullet")
doc.add_paragraph("Item 2", style="List Bullet")

# Quote style
doc.add_paragraph("A memorable quote.", style="Quote")
```

### Replace Text
```python
for paragraph in doc.paragraphs:
    if "old_text" in paragraph.text:
        for run in paragraph.runs:
            run.text = run.text.replace("old_text", "new_text")
```

## Common Libraries
- `python-docx`: create/edit .docx files
- `docx2pdf`: convert .docx to PDF (Windows: uses Word COM, else: LibreOffice)
- `docx2txt`: extract plain text from .docx
