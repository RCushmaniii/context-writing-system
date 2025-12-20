# Skill: Cold Email (Outbound)

## Goal

Write cold outreach emails that feel human, calm, specific, and aligned with the ICP—focused on a single problem and a low-friction next step.

## Triggers

Use when asked for:

- cold email
- outbound template
- prospecting email
- “reach out to companies”

## Required context

Always load:

- /context/core/voice-dna.json
- /context/core/icp.json
- /context/core/business-profile.json (CTA must be accurate)
- /context/core/claims-policy.json (if present)

## Inputs

Required:

- Target role: founder | ops lead | support lead | IT manager
- Industry: services | logistics | industrial | SaaS | e-commerce
- Primary pain angle: repeat questions | leads after hours | scattered knowledge | onboarding
- CTA: “free 20-min clarity call” (default)

Optional:

- Personalization details (company name, recent event, hiring growth, etc.)
- Email length: ultra-short | short (default) | standard

## Output format (strict)

Provide 3 variants:

- Variant A: ultra-short (max 70 words)
- Variant B: short (max 120 words)
- Variant C: standard (max 170 words)

Each must include:

- Subject line (max 6 words)
- Body
- Single CTA (one next step)
- Soft, low-pressure sign-off

## Messaging rules

- No “AI revolution” language.
- No invented case studies.
- One pain, one idea, one CTA.
- Use credibility lightly (1 proof point max).

## QA checklist

- Sounds like a real operator, not marketing spam?
- Specific to the role + pain?
- No risky claims?
- CTA friction is low?
