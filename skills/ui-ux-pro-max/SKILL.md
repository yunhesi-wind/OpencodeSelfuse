---
name: ui-ux-pro-max
description: >
  UI/UX design intelligence. 67 styles, 96 color palettes, 57 font pairings,
  25 chart types, 13 tech stacks (React/Next.js/Vue/Svelte/SwiftUI/
  React Native/Flutter/Tailwind/shadcn/ui and more).
  Use when user wants UI/UX design, frontend styling, color palette selection,
  typography pairing, or component design recommendations.
---

# UI/UX Pro Max

Comprehensive UI/UX design reference for agent-assisted frontend development.

## Quick Reference

### Tech Stack Selection
Ask one question first: "What's the target platform?"
- Web app (React): Next.js + Tailwind + shadcn/ui
- Web app (Vue): Nuxt + Tailwind + shadcn-vue
- Mobile (cross-platform): React Native or Flutter
- Mobile (iOS only): SwiftUI
- Landing page: Astro + Tailwind
- Dashboard: React + Recharts/Tremor
- Rapid prototype: Single HTML file + inline CSS

### Color Palette (Quick Picks)
- Professional/SaaS: Slate + Blue (#3B82F6 accent)
- Healthcare: Teal + White + Gray
- Finance: Navy + Gold accent
- Creative: Purple gradient + White
- Dark mode: Neutral-900 bg, Neutral-100 text, Blue-400 accent
- Nature: Green + Earth tones

### Font Pairing (Quick Picks)
- Modern: Inter (body) + Inter (heading, bold weight)
- Editorial: Georgia (heading) + Inter (body)
- Technical: JetBrains Mono (code) + Inter (UI)
- Elegant: Playfair Display (heading) + Lora (body)
- Clean: System font stack (no external fonts)

### Spacing Scale (Tailwind-compatible)
xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px | 2xl: 48px | 3xl: 64px

### Component Design Principles
- Input fields: Clear label, visible border, focus ring, error state
- Buttons: Primary (filled), Secondary (outlined), Ghost (text only)
- Cards: Subtle shadow, rounded corners (8px), consistent padding
- Modals: Overlay backdrop, centered, close button, ESC to close
- Tables: Alternating row colors, sticky header, sortable columns
- Navigation: Active state visible, breadcrumbs for deep pages

## When to Apply
Trigger when user:
- Asks about styling, color, typography, or layout
- Is building a UI component or page
- Needs design guidance for frontend work
- Asks "what looks good" or "how should I style this"

## Rules
- Prefer system fonts unless user specifies otherwise
- Prefer accessible color contrast (WCAG AA minimum)
- Prefer Tailwind if the project already uses it
- Always suggest light AND dark mode considerations
- Mobile-first responsive design by default
