# Context Engineering Kit

**A production-grade operating system for AI-assisted writing**
Built to enforce voice, audience, business truth, and claims discipline — at scale.

Live System Explorer:
👉 [CushLabs.ai Writing System](https://cushlabs-writing-system.vercel.app/)

---

## What This Is

The Context Engineering Kit is **not a prompt library**.

It is a **governed writing system** that separates:

- **Truth** (what is real)
- **Structure** (how content is shaped)
- **Examples** (what “good” looks like)

So AI output stays:

- accurate
- on-brand
- audience-aware
- consistent over time

---

## Why This Exists

Most AI writing systems fail because they:

- drift stylistically
- hallucinate offers or metrics
- ignore positioning
- overwrite what already worked
- treat prompts as magic instead of inputs

This kit solves that by making **context explicit, versioned, and enforceable**.

---

## Writing System Explorer (New)

The system now includes a **read-only web UI** that renders the repository itself.

The Explorer makes the system:

- human-legible
- AI-debuggable
- auditable
- easier to maintain

**No build step. No framework lock-in. No content mutation.**

Live Explorer:
👉 [https://vercel.com/rcushmaniii-projects/cushlabs-writing-system](https://vercel.com/rcushmaniii-projects/cushlabs-writing-system)

---

## Key Capabilities

### Context-Driven Writing

- **Voice DNA**
  Tone, cadence, phrasing, boundaries
  Prevents generic “AI voice”

- **Ideal Client Profile (ICP)**
  Pains, desires, objections, real language
  Enables actual resonance

- **Business Profile**
  Offers, pricing logic, positioning
  Prevents invented facts

- **Claims Policy**
  What can and cannot be stated
  Enforces credibility-first output

---

### Skill-Based Asset Generation

Each content type has a dedicated **Skill**:

- landing pages
- sales decks
- emails
- blog posts
- LinkedIn content
- proposals

Skills define:

- structure
- inputs
- QA rules
- constraints

Voice and claims never live in Skills.

---

### Knowledge That Compounds

- **Gold-standard examples** (what “good” looks like)
- **Reusable templates** (CTAs, proof, objections)
- **Drafts and notes** kept explicitly non-canonical

The system improves with use instead of drifting.

---

### Writing System Explorer Features

- Static HTML / CSS / JS
- Root-relative paths (Vercel-safe)
- Markdown rendering (docs, prompts, skills)
- JSON rendering (context profiles)
- File metadata (path, version, trust level)
- Visual trust badges (canonical / reference / draft)
- Responsive and accessible by default

The repository remains the **single source of truth**.

---

## Repository Structure (Canonical)

```text
/site/                → Explorer frontend (static)
/context/core/        → Source-of-truth JSON profiles
/prompts/             → Creator interview prompts
/skills/              → Content-type expertise
/knowledge/           → Examples, templates, references
/docs/                → Supporting documentation
/CLAUDE.md            → System contract
/archive/             → Versioned history
```

---

## Quick Start

1. Clone the repo
2. Run creator prompts once:

   - `voice-dna-creator.md` → `voice-dna.json`
   - `icp-creator.md` → `icp.json`
   - `business-profile-creator.md` → `business-profile.json`

3. Point your AI tool to `CLAUDE.md`
4. Generate assets using natural language

No prompt engineering required.

---

## Supported Tools

- Claude Projects
- Cursor
- Windsurf
- ChatGPT
- Any RAG-capable system

Markdown + JSON.
No vendor lock-in.

---

## Philosophy

Structure beats prompts.
Truth beats cleverness.
Systems beat inspiration.

This kit is for people who want **repeatable clarity**, not AI theater.

---
