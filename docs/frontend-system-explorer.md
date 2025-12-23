---
# Writing System Explorer — Implementation Overview

The **Writing System Explorer** is now complete.

This document records **what was built**, **how it works**, and **how it is deployed**, so the system can be understood, audited, and extended without reverse-engineering the frontend.

The Explorer is intentionally **read-only**.
The repository remains the **single source of truth**.
---

## Purpose

The Writing System Explorer exists to:

- Make the writing system **human-legible**
- Make context and constraints **AI-debuggable**
- Preserve **canonical files** as the source of truth
- Prevent system drift as the framework grows

It is **not** a CMS, editor, or generator.
It is a **projection layer** over the repository.

---

## Complete Site Structure

### Core Infrastructure ✅

**CSS**

- `/site/css/main.css`
- Responsive layout
- Clean, neutral design
- Cards, collapsibles, breadcrumbs
- File metadata blocks
- Trust badges (canonical / reference / draft)

**JavaScript**

- `/site/js/common.js`
- Navigation active-state management
- Markdown rendering
- JSON rendering
- Collapsible section utilities
- File metadata helpers
- Shared initialization logic

No build step. No framework lock-in.

---

## Pages Built (24 total)

### Root & System

- `/site/index.html`
  Landing page that explains the system’s intent, scope, and navigation.

- `/site/system/index.html`
  Renders `CLAUDE.md` directly, preserving the canonical system contract.

---

### Context Profiles (5 pages)

- `/site/context/index.html`
  Overview of all core context profiles and their role.

- `/site/context/voice-dna.html`
  JSON viewer for `voice-dna.json`.

- `/site/context/icp.html`
  JSON viewer for `icp.json`.

- `/site/context/business-profile.html`
  JSON viewer for `business-profile.json`.

- `/site/context/claims-policy.html`
  JSON viewer for `claims-policy.json`.

Each page displays:

- File path
- Trust level
- Version
- Last updated date

---

### Prompts (4 pages)

- `/site/prompts/index.html`
  Explains prompts as **system inputs**, not copy.

- `/site/prompts/voice-dna-creator.html`
  Voice DNA creator prompt.

- `/site/prompts/icp-creator.html`
  ICP creator prompt.

- `/site/prompts/business-profile-creator.html`
  Business profile creator prompt.

Prompts are framed as **repeatable interviews**, not one-time setup artifacts.

---

### Skills (6 pages)

- `/site/skills/index.html`
  Overview of skills and how they relate to context and knowledge.

- `/site/skills/landing-page.html`

- `/site/skills/website-hero.html`

- `/site/skills/blog-post.html`

- `/site/skills/linkedin-post.html`

- `/site/skills/cold-email.html`

Each skill defines **format and strategy**, never voice or claims.

---

### Knowledge (3 pages)

- `/site/knowledge/index.html`
  Explains the knowledge system and trust levels.

- `/site/knowledge/content/index.html`
  Gold-standard reference content.

- `/site/knowledge/templates/index.html`
  Reusable, drop-in templates.

Drafts and notes remain intentionally separate and non-authoritative.

---

## Key Features

- ✅ Root-relative paths for Vercel compatibility
- ✅ No build step (pure HTML / CSS / JS)
- ✅ Fully responsive layouts
- ✅ Accessible, semantic HTML
- ✅ Trust levels surfaced visually
- ✅ File metadata rendered consistently
- ✅ Dynamic Markdown rendering (docs, prompts, skills)
- ✅ Dynamic JSON rendering (context profiles)
- ✅ Syntax highlighting for code blocks

The frontend never mutates data.

---

## Libraries Used (CDN)

All dependencies are loaded via CDN to avoid build tooling.

- **marked** — Markdown → HTML rendering
- **json-formatter-js** — Collapsible JSON viewer
- **highlight.js** — Code syntax highlighting

---

## Deployment Model (Vercel)

The site is designed for **static hosting**.

### Repository Structure

```text
/site/              → deployed as the web root
  /css/main.css
  /js/common.js
  /index.html
  /system/
  /context/
  /prompts/
  /skills/
  /knowledge/

/context/core/       → canonical JSON files
/prompts/            → canonical Markdown prompts
/skills/             → canonical skill definitions
/knowledge/           → canonical knowledge files
/CLAUDE.md
```

---

### Why This Works

- All fetches use **root-relative paths**
- HTML is served from `/site`
- Canonical content remains at repo root
- Vercel serves both without special routing
- No conflicts with other frontend projects in the repo

Multiple Vercel projects can point to the same repository if needed.

---

## Deployment Readiness

The Writing System Explorer is:

- ✔ Production-ready
- ✔ Auditable
- ✔ Framework-agnostic
- ✔ Version-aware
- ✔ Safe from content drift

No additional setup is required beyond Vercel configuration.

---

## Next Optional Step

Create a `vercel.json` file to explicitly define the deployment root and routing behavior.

(Tracked separately.)

---

**Status:** Complete
**Last Updated:** 2025-12-20

---
