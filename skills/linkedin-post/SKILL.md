# Skill: LinkedIn Post (CushLabs.ai) — v2 (Stronger + More Repeatable)

## Goal

Create LinkedIn posts that:

- sound like the CushLabs founder voice (calm, sharp, no hype)
- resonate with the ICP (Mexico/LATAM SMB founders + ops/support leads)
- build trust through clarity, tradeoffs, and practical steps
- generate engagement (comments/DMs) without sounding salesy
- optionally drive a low-friction CTA (free clarity call)

---

## Triggers

Use this skill when the user asks for:

- LinkedIn post
- thought leadership
- “write a post about…”
- educate / persuade / announce / story
- RAG / assistants / support / ops / onboarding / internal knowledge
- “rewrite this post in my voice”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json`

Load if CTA/offers are referenced (recommended default = YES): 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json`

Optional:

- Search `/knowledge/content/` or `/knowledge/templates/` if user requests continuity with past posts.

---

## Inputs

### Required (ask max 3 questions only if missing)

- Topic (one sentence)
- Post intent: educate | persuade | announce | story | myth-bust
- Audience segment: founder/GM | ops/support lead | IT/engineering lead

### Optional (high-value)

- Length: short (120–180) | standard (180–280) | long (280–450)
- Hook style: contrarian | pain-led | story-led | checklist | “simple model”
- CTA type: question | comment prompt | “DM me” | soft book-call
- One detail to make it real (example scenario, a mistake you’ve seen, a tradeoff)

If missing, assume:

- length = standard
- hook style = pain-led
- CTA type = question
  State assumptions in **one line** and proceed.

---

## Output format (strict)

Deliver either:
A) **3 variants** (recommended) OR
B) **1 final post** (if requested)

Each post must include:

1. **Hook** (1–2 lines)
2. **Body** (2–6 short paragraphs; 1–2 sentences each)
3. **Optional bullets** (max 5; only if it improves clarity)
4. **Close** (one line): CTA question OR comment prompt OR soft CTA

Optional add-ons (only if requested):

- 3 alternative hooks
- 3 alternative CTA lines

---

## Content strategy (what makes this work)

### A) Start from a real ICP pain or misconception

Choose ONE anchor:

- “Support is eating the business.”
- “Leads leak after hours.”
- “Knowledge is scattered (Docs/WhatsApp/‘ask Juan’).”
- “Teams fear wrong answers and reputation risk.”
- “People buy tools; they don’t build systems.”

### B) Teach one clean takeaway

Use one of these shapes:

- **Tradeoff post:** “Here’s what you gain / give up.”
- **Framework post:** 3-step model (clarity → v1 → measure).
- **Checklist post:** 5 signs you’re ready.
- **Myth-bust:** “The myth” → why it fails → what to do instead.
- **Story:** a short moment + lesson + next step.

### C) Make it specific

Include at least one concrete detail:

- a real-world scenario (after-hours leads, onboarding chaos, repeated questions)
- a simple metric to track (time-to-answer, deflection rate) — **no invented results**
- a practical next step

### D) End with a low-friction interaction

Prefer:

- a question that invites a real reply
- a “comment X and I’ll send…” (only if you actually will)
- a soft CTA: “If you want, book a free clarity call.”

---

## Voice rules (non-negotiable)

- Calm, sharp, grounded. No hype.
- No buzzwords: revolutionary, cutting-edge, game-changing, 10x, disrupt.
- Avoid “chatbot.” Prefer: **assistant**, **support system**, **knowledge system**.
- Avoid model names (“GPT/LLM”) unless user explicitly requests.
- Short-to-medium sentences. Lead with the point.
- Sound like an operator, not a marketer.

---

## Claims & credibility rules (must obey claims-policy)

- No absolute guarantees (accuracy/security/SEO).
- No invented metrics or ROI.
- Do not imply client case studies unless explicitly provided.
- Use approved proof sparingly (max 1 proof point per post), e.g.:
  - “17 years Fortune 500 IT leadership”
  - “8 years profitable solopreneur”
  - “5-star Google rating (coaching)”
  - “Published testimonials”

Safe phrasing examples:

- “built with guardrails”
- “human handoff when uncertain”
- “performance-conscious deployment”
- “privacy-aware design”

---

## Hashtag and formatting rules

- Hashtags: optional, max 3, only if relevant.
- Emojis: optional, minimal (0–3). No emoji spam.
- Use whitespace intentionally for skimmability.

---

## CTA menu (pick ONE)

Choose based on intent:

- **Engagement question:** “Where does your knowledge live right now—Docs, WhatsApp, or ‘ask Juan’?”
- **Comment prompt:** “If you want my checklist for a safe v1, comment ‘v1’.”
- **Soft CTA:** “If you want a clear plan, book a free 20-minute clarity call.”
- **DM CTA:** “DM me ‘assistant’ and I’ll ask 3 questions to scope it.”

---

## QA checklist (must run before final output)

- Would an ops lead/founder nod in the first 2 lines?
- Is there one clear takeaway (not a vague motivational post)?
- Is it skimmable (short paragraphs, clear flow)?
- Any hype/absolutes/invented numbers? Remove.
- Does it avoid “chatbot” + model-name talk?
- Does the close invite a real response (not “let me know your thoughts”)?
- If CTA/offers are included: are they accurate to business-profile.json?

---

## Defaults (if user gives minimal input)

- Audience: founder + ops/support lead
- Intent: educate
- Length: standard (180–280)
- Hook style: pain-led
- CTA: engagement question
