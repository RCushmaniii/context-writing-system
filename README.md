# Context Engineering Kit

**Clone your voice. Crush content. Scale forever.**

**No drift. No hallucinations. Just _you_—at 10x speed.**

**A context engineering framework that makes AI write like you, not like AI.** It stores your voice, audience profile, business facts, and claim rules in structured JSON files. When you request content (landing page, email, LinkedIn post, etc.), the AI loads these "truth files" plus format-specific skills to produce consistent, on-brand output — without hallucinated claims or generic phrasing.

[Live Explorer →](https://cushlabs-writing-system.vercel.app/)

![Writing System Explorer](.github/images/screenshot.jpg)

---

## The Problem It Solves

AI drafts start fire, end generic. You edit for hours: killing hype, restoring edge, fact-checking ghosts.

**This ends that.** Load truth once. Generate flawless assets forever.

---

## What Makes It Magic

**Truth files** lock your reality. **Skills** nail every format. **Knowledge** compounds wins.

```
Truth → Skills → Knowledge → Repeatable domination
```

**Explorer UI** (new): Branded dashboard of your entire system. Static. Vercel-ready. Zero build.

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

## Core Weapons

### `/context/core/` – Your Unbreakable Foundation

- **Voice DNA**: Tone, phrasing, edge. No "AI slop."
- **ICP**: Real pains/objections. True resonance.
- **Business**: Offers/pricing. No invented features.
- **Claims**: Guardrails. Credibility enforced.

### `/skills/` – Format Mastery

One file per weapon:

- Landing pages ✓
- Cold emails ✓
- Sales decks ✓
- LinkedIn ✓
- Proposals ✓

Structure + QA baked in.

### `/knowledge/` – Gets Smarter

Your best work → fuel for next. Compounds instead of drifts.

---

## Drop & Dominate (2 Min Setup)

1. `git clone`
2. Run 3 creators → core JSON files
3. Point Claude/Cursor to `CLAUDE.md`
4. "Write my landing page" → _Done_

**Works everywhere:** Claude Projects, Cursor, ChatGPT files, local LLMs.

---

## Operators Only

For consultants, technical founders, productized services. Scale _your_ voice across touchpoints.

**Not for:** 50-client agencies or prompt tinkerers.

---

## Why It Wins

| Prompts               | This Kit            |
| --------------------- | ------------------- |
| Repeat every time     | Load once           |
| Drifts + hallucinates | Enforced + truthful |
| 47 chat tabs          | One system prompt   |
| Manual QA             | Baked-in guardrails |
| Stagnant              | Compounds           |

**Philosophy:** Systems > inspiration. Truth > cleverness.

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

**MIT. Fork it. Weaponize it.**

[Live Demo](https://cushlabs-writing-system.vercel.app/) | [GitHub](https://github.com/RCushmaniii/cushlabs-writing-system)

---
