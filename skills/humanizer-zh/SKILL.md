---
name: humanizer-zh
description: >
  Remove AI-generated traces from Chinese text. Based on Wikipedia's "AI writing characteristics"
  guide. Use when user asks to "去除AI痕迹", "降低AIGC率", "去AI味", "改写得更像人写的",
  or wants to make text sound less machine-generated.
---

# Humanizer-ZH

Remove AI-generated traces from Chinese text while preserving original meaning and academic integrity.

## Core Principles

1. **Preserve meaning** — Never change factual content, data, citations, or academic argument
2. **Humanize style** — Make text sound like a native Chinese writer, not a translation engine
3. **Keep structure** — Maintain original paragraph flow and logical organization

## AI Writing Patterns to Fix

| Pattern | Detection | Fix |
|---------|-----------|-----|
| 过度使用连接词 | 首先、其次、最后、此外、总之 连续出现 | 删减或替换其中部分 |
| 模板化开头 | 随着...的发展、在...背景下、众所周知 | 直接切入主题 |
| 翻译腔 | 的...是...的、通过...的方式 | 简化句式 |
| 机械并列 | 不仅...而且...、既...又... 过度使用 | 用更自然的表达 |
| 空洞总结 | 综上所述、总而言之 + 无新信息的重复 | 删除或精简 |
| 过度修饰 | 非常重要的、极其显著的、相当 | 用事实代替形容词 |
| 英文直译感 | 在某种程度上、就...而言、基于...的考虑 | 用地道中文 |
| 被动滥用 | 被...所... 反复出现 | 改为主动或省略"被" |

## Process

1. Read the full text once to understand meaning and argument
2. Identify AI-typical patterns (use the table above)
3. Rewrite each problematic section while keeping:
   - Exact same data, numbers, and citations
   - Same paragraph structure
   - Same academic terminology
4. Read the rewritten text aloud mentally — does it sound like a real person wrote it?
5. Return only the humanized text. NO explanation of changes unless user asks.

## Bilingual Note
If the text contains English terms or references, keep them unchanged. Only humanize the Chinese portions.
