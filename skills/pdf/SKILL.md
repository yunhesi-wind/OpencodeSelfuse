---
name: pdf
description: >
  PDF manipulation: read/extract text and tables, merge/split, rotate,
  watermark, create, fill forms, encrypt/decrypt, OCR.
  Use when user needs to work with PDF files.
---

# PDF Operations

Work with PDF files using Python (PyPDF2 + pdfplumber) and bash tools.

## Quick Reference

### Read/Extract Text
```python
# Extract all text
import PyPDF2
reader = PyPDF2.PdfReader("file.pdf")
for page in reader.pages:
    print(page.extract_text())

# Extract with layout preservation (pdfplumber)
import pdfplumber
with pdfplumber.open("file.pdf") as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        tables = page.extract_tables()
```

### Merge PDFs
```python
from PyPDF2 import PdfMerger
merger = PdfMerger()
for pdf_file in ["file1.pdf", "file2.pdf"]:
    merger.append(pdf_file)
merger.write("merged.pdf")
merger.close()
```

### Split PDF
```python
reader = PyPDF2.PdfReader("input.pdf")
# Split at page N
for i in range(len(reader.pages)):
    writer = PyPDF2.PdfWriter()
    writer.add_page(reader.pages[i])
    with open(f"page_{i+1}.pdf", "wb") as f:
        writer.write(f)
```

### Rotate Pages
```python
reader = PyPDF2.PdfReader("input.pdf")
writer = PyPDF2.PdfWriter()
for page in reader.pages:
    page.rotate(90)  # or 180, 270
    writer.add_page(page)
with open("rotated.pdf", "wb") as f:
    writer.write(f)
```

### Add Watermark
```python
reader = PyPDF2.PdfReader("doc.pdf")
watermark = PyPDF2.PdfReader("watermark.pdf").pages[0]
writer = PyPDF2.PdfWriter()
for page in reader.pages:
    page.merge_page(watermark)
    writer.add_page(page)
with open("watermarked.pdf", "wb") as f:
    writer.write(f)
```

### Create PDF from Scratch
Use `reportlab` or `fpdf` for creating PDFs. For simple text docs:
```python
from reportlab.pdfgen import canvas
c = canvas.Canvas("output.pdf")
c.drawString(100, 750, "Hello World")
c.save()
```

### Encrypt/Decrypt
```python
reader = PyPDF2.PdfReader("input.pdf")
writer = PyPDF2.PdfWriter()
for page in reader.pages:
    writer.add_page(page)
writer.encrypt("user_password", "owner_password")
with open("encrypted.pdf", "wb") as f:
    writer.write(f)

# Decrypt
reader = PyPDF2.PdfReader("encrypted.pdf")
reader.decrypt("user_password")
```

### OCR with Tesseract
```bash
# Requires: tesseract + pdf2image + pytesseract
# Convert PDF to images, then OCR
python -c "
from pdf2image import convert_from_path
import pytesseract
images = convert_from_path('scanned.pdf')
for i, img in enumerate(images):
    text = pytesseract.image_to_string(img, lang='chi_sim+eng')
    print(text)
"
```

## Process
1. Determine the operation from user request
2. Check if required libraries are available; install missing ones
3. Run the operation
4. Verify output file exists and is valid
5. Report completion
