# Folder Structure — CushLabs Writing System

This repository implements a context-engineered AI writing system.
Each layer has a clear responsibility and strict boundaries.

---

## Root

/CLAUDE.md            # System rules, workflow, priorities
/STRUCTURE.md         # This file (authoritative structure)

---

## Context (Truth Layer)

Defines who you are, who you write for, and what you offer.
These files are loaded before any writing task.

/context/
  /core/
    voice-dna.json          # Tone, cadence, phrases, never-do rules
    icp.json                # Ideal Customer Profile
    business-profile.json   # Positioning, offers, delivery model
    claims-policy.json      # (Optional) What can/cannot be claimed

---

## Skills (How to Write)

Each skill defines structure, strategy, constraints, and QA rules
for a specific content type.

/skills/
  /website-hero/
  /landing-page/
  /faq/
  /about-page/
  /contact-page/
  /blog-post/
  /linkedin-post/
  /linkedin-profile/
  /cold-email/
  /sales-deck/
  /case-study-snapshot/

---

## Prompts (Profile Builders)

/prompts/
  voice-dna-creator.md
  icp-creator.md
  business-profile-creator.md

---

## Knowledge (Examples + Reusable Assets)

### Content (Gold Standard Examples)

/knowledge/content/
  /website-hero/
  /landing-page/
  /faq/
  /about-page/
  /contact-page/
  /blog-post/
  /linkedin-post/
  /linkedin-profile/
  /cold-email/
  /sales-deck/
  /case-study-snapshot/

### Templates (Reusable Blocks)

/knowledge/templates/
  /cta/
  /proof/
  /bios/
  /objections/
  /snippets/

### Drafts & Notes

/knowledge/drafts/
/knowledge/notes/

---

## Archive

/archive/

---

## System Design Notes

- No hidden folders (Windows-friendly)
- Skills define how to write
- Knowledge provides examples of what "good" looks like
- Templates provide reusable copy blocks
- Context always wins over skills
- Claims policy overrides everything
