# Skill: Case Study Snapshot (Problem–Solution One-Pager)

**Skill name:** `case-study-snapshot`

## Goal

Create a standardized **one-page case study snapshot** in Markdown that answers the buyer’s real question:

> “Have you solved _this specific problem_ before?”

This is **not** a long narrative case study. It’s a fast-scanning proof artifact for:

- website “Proof” sections
- outbound emails / DMs
- proposals
- sales-deck appendices
- follow-ups after discovery

---

## Triggers

Use this skill when the user asks for:

- case study
- proof one-pager
- “project snapshot”
- “problem-solution summary”
- “write a case study”
- “client results”
- “example project”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json` (for pain language + relevance)

Load if offers/methodology are referenced: 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json`

Optional:

- Search `/knowledge/content/` and `/knowledge/notes/` for any real details to avoid inventing.
- Search `/knowledge/templates/` for approved phrasing blocks.

---

## Inputs

### Required (ask max 3 questions only if missing)

- Project name (or anonymized label if confidential)
- Industry tag (required): e.g., Logistics, E-commerce, SaaS, Industrial, Services
- Client type: SMB | mid-market | enterprise (or “unknown”)
- Challenge (what was broken)
- Solution scope (what was delivered)

### Optional (high-value)

- Geography: Mexico | LATAM | North America | cross-border
- Channel: website | WhatsApp | internal | helpdesk
- Constraints: performance/SEO sensitive | security sensitive | low bandwidth team
- Timeline: “2–6 weeks” (only if known)
- Tools/stack (only if safe to mention)
- Numbers (only if true): tickets reduced, time-to-answer, lead capture, etc.
- Confidentiality setting:
  - public client name
  - anonymize client
  - anonymize + remove exact tooling

If numbers are missing, proceed with **Qualitative Wins** only.

---

## Output format (strict)

Output a **single Markdown file** in this exact structure:

1. Frontmatter tags (YAML)
2. Title
3. Snapshot (3 bullets max)
4. Challenge
5. Investigation
6. Solution
7. Result
8. Qualitative Wins (if no hard numbers)
9. What we’d do next (optional)
10. CTA (soft, low friction)

---

## Required tagging (frontmatter)

Must include:

- `industry` (single value)
- `use_case` (1–3 values)
- `audience` (founder | ops/support | IT)
- `region` (MX | LATAM | NA | cross-border)
- `confidentiality` (public | anonymized)
- `keywords_en` (3–5)
- `keywords_es` (3–5, optional but recommended)

Example frontmatter:

```yaml
---
id: cs-logistics-afterhours-leads
title: "After-hours Lead Capture Assistant"
industry: Logistics
use_case: ["lead-qualification", "support-deflection"]
audience: ["founder", "ops-support"]
region: "cross-border"
confidentiality: "anonymized"
keywords_en:
  ["AI assistants", "lead qualification", "customer support automation"]
keywords_es:
  [
    "asistentes de IA",
    "calificación de prospectos",
    "automatización de soporte",
  ]
---
```
