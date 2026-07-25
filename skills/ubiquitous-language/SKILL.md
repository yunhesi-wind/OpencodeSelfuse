---
name: ubiquitous-language
description: >
  Extract a DDD-style ubiquitous language glossary from the current conversation.
  Flag ambiguities and propose canonical terms. Use when a project has
  inconsistent terminology or when onboarding requires domain clarity.
---

# Ubiquitous Language

Extract a shared vocabulary from the conversation. In Domain-Driven Design,
the ubiquitous language ensures everyone — developers, domain experts, users —
uses the same words for the same concepts.

## Process

### 1. Scan the Conversation
Identify every domain-specific term used. Look for:
- Nouns that represent business concepts (Order, Account, Policy, Claim)
- Verbs that represent business actions (Submit, Approve, Fulfill, Settle)
- Adjectives that represent states (Pending, Active, Suspended, Closed)

### 2. Detect Ambiguity
For each term, check:
- Is the same word used to mean different things in different contexts?
- Are different words used to mean the same thing?
- Are there terms whose meaning is unclear?

### 3. Propose Canonical Terms
Create a glossary:

```markdown
# Ubiquitous Language Glossary

## Core Concepts
| Term | Definition | Used In | Aliases (deprecated) |
|------|-----------|---------|---------------------|
| Order | A confirmed purchase request from a customer | Orders, Payments, Fulfillment | purchase, transaction |
| Claim | A customer request for reimbursement | Claims, Support | ticket, reimbursement request |

## Actions
| Term | Definition | Trigger | Result |
|------|-----------|---------|--------|
| Submit | Customer provides order/claim for processing | User action | Status → Submitted |
| Approve | System or agent confirms validity | Validation passed | Status → Approved |

## States
| Term | Definition | Ingress | Egress |
|------|-----------|---------|--------|
| Pending | Awaiting initial review | Created | → Approved or Rejected |
| Suspended | Temporarily inactive | Manual/admin action | → Active |

## Conflicts Found
- "Ticket" used for both support tickets AND payment tickets → separate: "SupportTicket" vs "PaymentTicket"
- "User" ambiguous between customer and admin → use "Customer" and "Admin" explicitly
```

### 4. Validate
Present the glossary to the user. Ask:
- "Do these definitions match your understanding?"
- "Are there any terms I missed?"
- "Are any of my proposed canonical terms wrong?"

## Rules
- Never invent terms — extract from what was actually discussed
- Flag ambiguity, don't silently resolve it
- Propose, don't impose — the domain expert has final say on terminology
