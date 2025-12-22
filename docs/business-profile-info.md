---

# Business Profile & Source of Truth

## Purpose

The Business Profile exists to ensure that all AI-generated outputs produced by the Context Engineering Kit are:

* accurate to what the business actually offers
* grounded in real positioning and proof points
* consistent across all customer-facing assets
* free from invented services, pricing, or capabilities
* aligned with the founder's actual delivery model and philosophy

This document explains **why the profile exists**, **how it is structured**, and **how it is used** within the system.

---

## Why a Business Profile Is Necessary

Most AI writing systems produce fluent, professional-sounding content that is factually wrong.

Common failures include:

- inventing services or features that don't exist
- describing capabilities the business hasn't built
- using generic positioning that doesn't reflect actual differentiation
- creating CTAs that lead nowhere
- making pricing claims inconsistent with real offers
- describing a "team" when the business is a solo operator

These errors erode credibility and create operational confusion.

The Business Profile introduces a **single source of truth** so the system can produce content that is both eloquent and accurate.

---

## Position in the System Architecture

The Business Profile is a **first-class Source of Truth**.

It lives alongside:

- `voice-dna.json` (how the business sounds)
- `icp.json` (who the business serves)
- `claims-policy.json` (what claims are safe to make)

and is loaded **whenever content includes**:

- CTAs or contact information
- pricing or investment ranges
- service descriptions or deliverables
- positioning statements
- proof points or credentials
- competitive differentiation

If content touches offers, outcomes, or business facts, the Business Profile **must be loaded**.

---

## What the Business Profile Contains

The profile is structured around the questions a prospective client would ask during a thorough evaluation.

### Core Identity

- Business name and tagline
- Positioning statement (who you serve, what you deliver, how you're different)
- Brand voice rules (first-person vs. we, tone, enforcement)

### Market Positioning

- Ideal Client Profile (company stage, pain points, budget signals, decision-makers)
- Delivery model (execution language, bilingual capabilities, partnership model)
- Competitive differentiation (vs. chatbot vendors, agencies, freelancers, enterprise consultancies)

### Commercial Offers

- Named service offerings with:
  - Duration and timeline expectations
  - Outcomes and deliverables
  - Typical pricing ranges
  - Ideal client fit criteria
- Pricing philosophy and payment terms
- What's explicitly **not a fit**

### Credibility & Proof

- "Why Robert" narrative (background, approach, accountability model)
- Proof points with credibility mechanisms
- Differentiation claims with supporting evidence

### Calls to Action

- Primary CTA
- Promise (what happens on the call)
- Booking mechanism

This structure ensures that every asset — from landing pages to LinkedIn posts — can reference real, approved business facts.

---

## How It's Generated

The Business Profile is created through a **structured interview process**, documented in `prompts/business-profile-creator.md`.

### Generation Process

1. A series of questions simulate a professional business interview
2. The founder provides answers grounded in actual offerings, experience, and positioning
3. Responses are structured into JSON following the schema
4. The completed profile becomes the canonical reference

### Key Principle

The profile is **descriptive, not aspirational**.

It captures what the business **currently offers**, not future plans or hypothetical services.

If a service isn't ready to sell, it doesn't belong in the profile.

---

## How It's Used Downstream

The Business Profile is consumed by Skills, templates, and all customer-facing content generation.

### During Content Creation

When an AI agent generates content that references the business:

1. The agent loads `business-profile.json`
2. All service descriptions, pricing, and CTAs are pulled from the profile
3. Positioning language is adapted (not invented)
4. Proof points are cited exactly as documented
5. Brand voice rules are enforced (I vs. we, tone, perspective)

### Enforcement Rules

- If an offer isn't in the profile, it **cannot be mentioned**
- If pricing isn't documented, the agent must direct to a discovery call
- If a proof point lacks credibility evidence, it's omitted
- If brand voice is violated (e.g., using "we" when "I" is required), the output is corrected

### Cross-File Coordination

The Business Profile works in concert with other context files:

- **Voice DNA** governs *how* facts are expressed
- **ICP** governs *who* the messaging targets
- **Claims Policy** governs *how boldly* capabilities are stated
- **Business Profile** governs *what is factually true*

When conflicts arise, the **truth wins** — the Business Profile overrides stylistic or persuasive preferences.

---

## Maintenance and Updates

The Business Profile is a **living document** that must stay synchronized with business reality.

### When to Update

Update the profile when:

- A new service offering is ready to sell
- Pricing changes or payment terms shift
- Proof points are added (new testimonials, credentials, case results)
- Positioning evolves based on market feedback
- Delivery model changes (e.g., adding a partner for Spanish-first clients)
- CTAs or booking mechanisms change

### Versioning

Before making significant changes:

- Archive the current version in `/archive/` with a date suffix
- Example: `business-profile-2025-12-20.json`

This creates an audit trail and allows rollback if needed.

### Validation

After updates, verify:

- All offers have clear deliverables and outcomes
- Pricing ranges are current and accurate
- Proof points are still verifiable
- CTAs point to active, monitored channels
- Brand voice rules still reflect current positioning

---

## How This Affects Day-to-Day Use

For users of the Context Engineering Kit, the Business Profile means:

- You don't need to manually fact-check every AI-generated asset
- Services and pricing are consistent across all channels
- Content can scale without introducing factual errors
- New hires or collaborators can understand the business without a 2-hour onboarding call
- The system adapts voice and style while preserving accuracy

If AI-generated content feels "off" or inaccurate, the Business Profile is the **first place to inspect**.

---

## Common Pitfalls

### Aspiration vs. Reality

Do not add services to the profile that:

- You haven't delivered yet
- Require capabilities you're still building
- Are priced based on guesses rather than cost analysis

The profile reflects **current commercial readiness**, not roadmap.

### Generic Positioning

Avoid vague statements like:

- "We help businesses grow"
- "Innovative AI solutions"
- "Best-in-class service"

The profile should be **specific enough** that a competitor couldn't copy-paste it.

### Stale Information

A Business Profile loses value rapidly if it drifts from reality.

Outdated pricing, deprecated services, or broken CTAs undermine the entire system.

Treat the profile as **infrastructure**, not a one-time artifact.

---

## Summary

The Business Profile is not a marketing document.

It is a **structured source of truth** that enables AI-assisted content creation to scale without sacrificing accuracy.

By defining:

- what the business offers
- how it's positioned
- what can be claimed
- how to convert prospects

the profile ensures that every piece of generated content is:

- factually correct
- strategically aligned
- commercially actionable
- credible by default

This is a **load-bearing component** of the Context Engineering Kit, not optional metadata.

---
