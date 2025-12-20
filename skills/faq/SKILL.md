# Skill: FAQ (Objections + Trust)

## Goal

Create FAQs that reduce buying friction, answer objections credibly, and move the reader toward the CTA.

## Triggers

Use when user asks for:

- FAQ page
- objections
- “answer common concerns”
- pricing/time/security questions

## Required context

Always load:

- /context/core/voice-dna.json
- /context/core/icp.json

Load if offers/CTA appear:

- /context/core/business-profile.json

Load if present:

- /context/core/claims-policy.json

## Inputs

- Count: default 7 Q&As
- Placement: homepage | landing page | service page | proposal
- CTA: book call (default)

## Default FAQ topics (7)

1. Cost / budget
2. Time to implement
3. Wrong answers / trust
4. Data security / privacy
5. Website performance / SEO
6. “Why not ChatGPT / Intercom / freelancer?”
7. English-first delivery + bilingual outputs

## Answer rules

Each answer must be 2–4 sentences and include:

- One concrete reassurance (process/guardrail/next step)
- One clear “what happens next” line when relevant

## Voice rules

- Direct. Calm. No hype.
- No jargon dumps.
- No moralizing. No “trust me.”

## Claims rules

- No absolute guarantees.
- No invented metrics.
- Security/performance must be framed as “designed to / validated / documented.”

## QA checklist

- Each answer reduces fear + increases clarity?
- No overpromises?
- English-first constraint appears exactly once (unless requested)?
