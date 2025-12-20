# Skill: Website Hero (Above-the-Fold)

## Goal

Write high-converting above-the-fold hero copy for CushLabs.ai that is:

- in voice (voice-dna.json)
- targeted to the ICP (icp.json)
- accurate to offers (business-profile.json)
- safe in claims (claims-policy.json if present)

## Triggers

Use this skill when the user asks for:

- hero / above-the-fold
- headline / subheadline
- homepage intro
- “make 5 variants”
- CTA button copy

## Required context

Always load:

- /context/core/voice-dna.json
- /context/core/icp.json

Load if CTA/offers are mentioned:

- /context/core/business-profile.json

Load if present:

- /context/core/claims-policy.json

## Inputs

Required (if missing, assume and state in one line):

- Page type: homepage | service page | demo page
- Primary objective: book a call | request demo | contact | lead capture
- Primary audience segment: (use icp.json)

Optional:

- Angle priority: support deflection | lead capture | internal knowledge | cross-border operations
- Output language: EN only | EN+ES
- Proof preference: (choose from approved proof only)

## Output format (strict)

Default: **5 variants**.

For each variant provide:

1. H1 (max 10 words)
2. Subheadline (max 24 words)
3. 3 bullets (max 10 words each)
4. Primary CTA button (max 5 words)
5. Secondary CTA (max 6 words)
6. Micro-proof line (max 12 words; approved proof only)

## Messaging rules

- Lead with an ICP pain OR outcome (not “AI”).
- Use “assistant” or “support/knowledge system.” Avoid “chatbot.”
- No hype language. No buzzwords.
- No model names. No “LLM,” “GPT,” etc.
- Include bilingual positioning carefully:
  - OK: “Bilingual EN/ES outputs”
  - Include English-first delivery constraint only if relevant to the page.

## Claims policy (non-negotiable)

- Never guarantee: “no hallucinations,” “no data leaks,” “won’t affect SEO.”
- Prefer: “built with guardrails,” “human handoff when uncertain,” “performance-conscious.”

## QA checklist

- Sounds like the brand voice (calm, sharp, no fluff)?
- Uses ICP language (repeat questions, scattered knowledge, leads after hours)?
- No absolute guarantees?
- Micro-proof is real + allowed?
- CTA matches business-profile.json?
