---

# Voice DNA & Writing System Identity

## Purpose

`voice-dna.json` exists to ensure that all AI-generated outputs produced by this system are:

- written in a consistent, recognizable voice (not generic "AI copy")
- structurally predictable (clear, scannable, action-oriented)
- culturally calibrated for U.S. and Mexican business contexts
- confident without arrogance (especially important for Mexican market trust)
- grounded in execution reality (frameworks, tradeoffs, constraints)

This document explains **why Voice DNA exists**, **what it captures**, and **how it shapes every piece of generated content**.

---

## Why Voice DNA Is Necessary

Without explicit voice constraints, AI systems tend to drift into:

- polished but generic corporate tone
- hype language and empty persuasion
- inconsistent pronoun choices ("we" vs. "I")
- over-explaining or under-explaining depending on the prompt
- cultural mismatch (too direct for some contexts, too vague for others)

The result is content that is fluent but not _you_.

Voice DNA introduces **stable behavioral rules** so the system writes like the same person every time, across:

- marketing
- sales
- product explanations
- proposals
- internal documentation
- client communications

---

## Position in the System Architecture

Voice DNA is a **first-class Source of Truth**.

It lives alongside:

- `icp.json` (who you're writing for and how they think)
- `business-profile.json` (what you offer)
- `claims-policy.json` (what claims are safe to make)

Voice DNA governs:

- **How** ideas are structured
- **How** direct or soft the tone should be
- **Which rhetorical devices** are preferred
- **What to avoid** (hype, arrogance, vague claims)
- **How to adapt** between technical and non-technical audiences

While ICP controls _who you're talking to_, Voice DNA controls _who is talking_.

---

## What Voice DNA Contains

The Voice DNA file is structured as an explicit writing system.

It captures identity, tone, structure, persuasion strategy, cultural constraints, and enforcement rules.

### 1. Core identity

**File section:** `data.core_identity`

Defines who the writer is and the angle the system should consistently express.

- **who_you_are** - communicator identity (not a job title)
- **what_you_do** - core function (translate technical complexity → business outcomes)
- **your_angle** - signature posture (clarity + empathy + confidence without arrogance)
- **cultural_foundation** - why cross-border fluency is credible and central

### 2. Worldview

**File section:** `data.worldview`

Defines the beliefs and contrarian takes that should repeatedly show up across content.

- **beliefs** - repeated truths and principles
- **contrarian_takes** - sharp positioning angles
- **repeated_themes** - recurring motifs (signal vs. noise, assumptions, tradeoffs)

This is how content stays consistent even when topics change.

### 3. Emotional palette

**File section:** `data.emotional_palette`

Establishes the emotional "temperature" of writing.

- **default_temperature** - baseline feel
- **primary_emotions** - what the reader should sense (calm authority, empathy)
- **avoid_emotions** - what must not appear (hype, snark, cold detachment)
- **cultural_calibration** - how warmth/directness shifts by market

### 4. Social positioning

**File section:** `data.social_positioning`

Defines the relationship between writer and reader.

- **role_you_play** - translator / decision-clarifier / guide
- **status_posture** - premium without being salesy
- **reader_relationship** - "I'm on your side"
- **pronoun_choice** - explicitly first-person singular ("I")
- **cultural_bridge_identity** - bridge between U.S. and Mexican markets

This prevents accidental tone drift into corporate team-speak.

### 5. Communication style

**File section:** `data.communication_style`

Specifies how arguments and explanations should be built.

- **thought_progression** - empathy → truth → business stakes → model → next steps
- **opening_techniques** - how to start (pattern, truth, reality-check)
- **transition_phrases** - preferred connective language
- **closing_habits** - clear next step without pressure

### 6. Technical calibration

**File section:** `data.technical_calibration`

Controls technical depth based on audience type.

- **default_mode** - outcomes first, implementation second
- **audience_adaptations** - rules for non-technical vs technical readers
- **jargon_rule** - precision when needed; translation otherwise
- **examples_of_good_translation** - concrete transformation patterns

This keeps content accessible without becoming vague.

### 7. Proof and persuasion

**File section:** `data.proof_and_persuasion`

Defines how credibility is built and how skepticism is handled.

- **persuasion_strategy** - empathy-first for decision-makers, data-first for influencers
- **primary_persuasion_sequence** - expected narrative flow
- **credibility_anchors** - what claims should be grounded in
- **when_to_use_numbers** / **when_to_use_stories** - explicit rules
- **mexican_client_specific_persuasion** - cultural constraints around risk and trust

### 8. Systematic thinking

**File section:** `data.systematic_thinking`

Captures the default mental model: frameworks, tradeoffs, phased roadmaps.

- **default_structure** - steps, phases, milestones
- **typical_pattern** - define decision → assumptions → options → recommendation
- **concrete_over_abstract** - specificity rules (commands, paths, ranges)

### 9. Fortune 500 discipline vs. solopreneur speed

**File section:** `data.fortune_500_discipline_meets_solopreneur_speed`

Establishes the central positioning tension and how to resolve it.

- Solopreneur advantages win in conflicts (speed, flexibility, relationship)
- Fortune 500 discipline is how quality is delivered without bureaucracy

### 10. Confidence + humility balance

**File section:** `data.confidence_and_humility_balance`

Explicit language constraints to avoid arrogance while maintaining authority.

- **preferred_confidence_language** - strong but bounded statements
- **avoid_confidence_language** - phrases that trigger distrust
- **handling_uncertainty** - how to acknowledge unknowns without sounding incompetent

### 11. Cross-border positioning

**File section:** `data.cross_border_positioning`

Defines what changes (and what stays constant) across audiences.

- audience adaptations for Mexican vs U.S. clients
- bilingual bridge framing and cultural nuance

### 12. Question-driven clarification

**File section:** `data.question_driven_clarification`

Defines how to respond to ambiguity:

- ask sharp clarifying questions
- treat clarity as risk reduction
- frame questions as alignment, not critique

### 13. Linguistic fingerprint

**File section:** `data.linguistic_fingerprint`

Captures signature rhetorical moves and patterns.

- contrast framing
- assumption surfacing
- tradeoff language
- translation (technical → business)
- scannable emphasis techniques

### 14. Formatting preferences

**File section:** `data.formatting_preferences`

Defines what output should look like in practice:

- scannable bullets and numbered steps
- executive-clean headings
- minimal capitalization
- concrete commands/paths when technical

### 15. Contextual adaptations

**File section:** `data.contextual_adaptations`

Defines stable voice + flexible delivery.

- calibration for beginners, advanced readers, skeptics, executives
- topic modulation for technical vs sales vs personal

### 16. Authenticity markers

**File section:** `data.authenticity_markers`

Defines what makes the writing unmistakably yours.

- signature phrases
- common words
- pet peeves
- humor style

### 17. Voice boundaries

**File section:** `data.voice_boundaries`

Hard guardrails the system must not cross.

- never exaggerate or imply guarantees
- never hide behind jargon
- never add AI meta-commentary
- never appear arrogant (especially to Mexican clients)

If content feels "off," this is one of the first sections to inspect.

### 18. Illustrative moments

**File section:** `data.illustrative_moments`

Provides representative excerpts and why they match the voice.

This is useful for:

- calibration (what good looks like)
- training new collaborators
- debugging drift in generated content

---

## How It's Generated

Voice DNA is created through a structured interview process documented in:

- `prompts/voice-dna-creator.md`

### Key Principle

Voice DNA is **behavioral, not aspirational**.

It is not "how you'd like to sound someday." It is how you reliably communicate when you're at your best.

---

## How It's Used Downstream

When an AI agent generates content:

1. The agent loads `voice-dna.json`
2. It applies tone and structure rules (clarity, short sections, scannability)
3. It uses preferred rhetorical devices and signature phrasing
4. It avoids prohibited language patterns and emotional cues
5. It adapts depth and directness to the audience (with ICP as a constraint)

### Enforcement Rules

- If Voice DNA says "avoid hype" → no urgency tricks or exaggerated claims
- If Voice DNA says first-person singular → use "I" unless a collaborator is explicitly named
- If Voice DNA says "concrete over abstract" → include specific next steps, examples, timelines, ranges
- If Voice DNA prohibits arrogance → remove dominant language even if it sounds persuasive

### Cross-File Coordination

Voice DNA works in concert with other context files:

- Voice DNA governs _how you express ideas_
- Business Profile governs _what you offer_
- Claims Policy governs _how boldly you can claim outcomes_
- ICP governs _who you're speaking to and what they care about_

When conflicts arise:

- If Voice DNA prefers directness but ICP indicates the audience needs more context → **ICP wins**
- If Voice DNA prefers confident language but Claims Policy prohibits certainty → **Claims Policy wins**
- If Voice DNA supports a story but the Business Profile lacks proof for the implied outcome → weaken the claim or add proof

---

## Maintenance and Updates

Voice DNA should evolve when your positioning or delivery changes.

### When to Update

Update Voice DNA when:

- you notice repeated drift in AI outputs (tone, structure, confidence)
- your market focus changes (U.S. vs Mexico emphasis)
- your offers evolve and require new persuasion patterns
- you refine your signature frameworks

### Versioning

Before making significant changes:

- archive the old version in `/archive/` with a date suffix
- example: `voice-dna-2025-12-21.json`

---

## Common Pitfalls

### Overfitting to One Context

Voice DNA should be stable across contexts.

It can adapt by audience, but it should not become a different personality per channel.

### Confusing Voice with Marketing

Voice is not tactics.

If Voice DNA starts filling up with:

- funnel strategies
- channel-specific hacks
- platform trends

you're likely mixing Voice DNA with Skills.

Voice DNA defines the _operating system_. Skills define the _use cases_.

### Letting Generic AI Phrasing Slip In

If output contains:

- vague inspiration
- corporate clichés
- over-polished filler

tighten Voice DNA boundaries or add more illustrative moments.

---

## Summary

Voice DNA is a load-bearing component of the writing system.

It ensures that AI-generated content:

- sounds consistently like one credible, warm, cross-border operator
- stays clear and action-oriented
- avoids hype, arrogance, and vagueness
- adapts appropriately between technical and non-technical audiences

If AI outputs feel fluent but not authentic, Voice DNA is the first place to inspect.

---
