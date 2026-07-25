---
name: nature-figure
description: >
  Submission-grade Nature/high-impact journal figure workflow.
  Supports matplotlib/seaborn (Python) and ggplot2/patchwork/ComplexHeatmap (R).
  Use when user needs "Nature-quality figures", "publication figures",
  "journal-quality plots", or figure preparation for submission.
---

# Nature Figure

Create publication-grade figures for Nature and high-impact journals.

## General Requirements
- Resolution: 300-600 dpi at final size
- Format: Vector (PDF, SVG) preferred, TIFF/PNG for raster only
- Font: Arial or Helvetica, 6-8 pt for labels, 9 pt for panel letters
- Color: Colorblind-friendly palette (avoid red-green combinations)
- Size: Single column (89 mm) or double column (183 mm)

## Workflow

### 1. Understand the Data
Before any plotting:
- What should the reader see? (Just ONE message per figure)
- What comparison is being made?
- What's the control?

### 2. Choose the Right Plot
- Comparison of groups: Bar chart (with individual points) or box plot
- Trend over time/dose: Line plot with error bands
- Distribution: Histogram or violin plot
- Relationship: Scatter plot with regression
- Composition: Stacked bar or pie (use sparingly)

### 3. Generate (Python)
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Setup
plt.rcParams.update({
    'font.family': 'Arial',
    'font.size': 7,
    'axes.labelsize': 8,
    'axes.titlesize': 8,
    'xtick.labelsize': 6,
    'ytick.labelsize': 6,
    'legend.fontsize': 6,
    'figure.dpi': 300,
    'savefig.dpi': 300,
    'savefig.bbox': 'tight',
})

# Colorblind-friendly palette
colors = ['#0072B2', '#E69F00', '#009E73', '#CC79A7', '#56B4E9', '#D55E00']
```

### 4. Generate (R)
```r
library(ggplot2)

theme_nature <- theme_minimal(base_size = 7) +
  theme(
    text = element_text(family = "Arial"),
    axis.title = element_text(size = 8),
    plot.title = element_text(size = 8),
    legend.text = element_text(size = 6),
    panel.grid.minor = element_blank()
  )
```

### 5. Review Checklist
- [ ] All axes labeled with units
- [ ] Legend present and readable
- [ ] Error bars defined (SD, SEM, or CI)
- [ ] Statistical significance indicated (*, **, *** with definition)
- [ ] Sample sizes (n= ) shown
- [ ] No chartjunk (3D effects, unnecessary gridlines, decorative elements)
- [ ] Colorblind-friendly
