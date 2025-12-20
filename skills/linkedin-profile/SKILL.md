# Skill: LinkedIn Profile (CushLabs.ai / Founder Profile) — v1.0 (Robust + Bilingual Keywords)

## Goal

Optimize the founder’s LinkedIn profile so it:

- attracts the **right inbound** (Mexico/LATAM SMB founders + ops/support leaders, plus North American clients)
- communicates a clear niche + value proposition in seconds
- uses a **keyword stack** in EN + ES (LinkedIn search treats them separately)
- builds trust with **credible proof** (no invented claims)
- drives one primary action: **Book a Free 20-Min Clarity Call** (or “DM me” if preferred)

This skill outputs **copy you can paste directly** into LinkedIn sections:
Headline, About, Featured, Experience bullets, Skills, and a short “Creator mode” content themes list.

---

## Triggers

Use this skill when the user asks for:

- LinkedIn profile rewrite
- Headline/About optimization
- “make my profile attract clients”
- bilingual LinkedIn keywords
- profile positioning / niche / credibility upgrade

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json`

Always load for profile positioning/offers: 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json`

Optional:

- Search `/knowledge/content/` for any existing bio snippets, testimonials you can safely reference, or prior LinkedIn posts.

---

## North Star (must define before writing)

Before drafting, produce these 4 items in a short block:

1. **The Niche**

- Who exactly are we trying to attract?
  Examples:
  - “Mexico & LATAM SMB founders + ops/support leads dealing with support overload and scattered knowledge”
  - “North American SMBs who need a practical, production-grade assistant (no hype)”

2. **The Promise**

- One sentence: what they get and why it matters.

3. **The Differentiators (3)**

- What makes you different from agencies, chatbot vendors, prompt freelancers.

4. **Keyword Stack (EN + ES)**
   Pick 3–5 core keywords per language (LinkedIn search indexing).

- English examples (for CushLabs):
  - AI assistants
  - customer support automation
  - knowledge base / internal knowledge search
  - lead qualification
  - RAG (optional; include only if you want it public)
- Spanish examples:
  - asistentes de IA
  - automatización de soporte al cliente
  - base de conocimiento
  - calificación de prospectos
  - búsqueda interna / asistente interno

If the user doesn’t provide keywords, infer them and state assumptions.

---

## Inputs

### Required (ask max 3 questions only if missing)

- Primary target: Mexico/LATAM | North America | mixed (default: mixed)
- Preferred CTA: Book call | DM me | Email (default: Book call)
- Language mode: EN only | ES only | EN+ES (default: EN+ES for Mexico)

### Optional (high-value)

- Industry emphasis: services | logistics | industrial | SaaS/IT services | e-commerce ops
- Tone preference for Spanish: formal | neutral | cercano (default: neutral/cercano but professional)
- Proof emphasis: Fortune 500 IT leadership | consulting (Kodak/Corning) | solopreneur track record | 5-star rating

---

## Output format (strict)

Deliver these sections in order:

### Part A — Profile Messaging Map

- Niche (1 line)
- Promise (1 line)
- Differentiators (3 bullets)
- Keyword stack EN (3–5)
- Keyword stack ES (3–5)
- CTA (1 line)

### Part B — Paste-Ready LinkedIn Copy

1. **Headline** (3 options)
2. **About** (2 versions: EN + ES)
3. **Featured section suggestions** (3–5 items, with one-line descriptions)
4. **Experience bullets** (templates + examples; for each major role, 3–6 bullets)
5. **Skills list** (EN + ES pairs; 15–30 entries)
6. **Top 10 “Featured Topics” for Creator Mode** (content themes aligned with ICP)
7. **Connection / DM script** (2 short templates)

---

## Headline rules (critical)

Strategy: headline follows you everywhere; it must sell value, not job title.

Use this formula:
**[Role/Title] | [Specific Expertise/Niche] | [Value Proposition/Result]**

Rules:

- No hype.
- Include at least one keyword from the stack.
- If bilingual, keep headline in English (recommended) and include Spanish keywords in About/Skills.

Headline length guidance:

- Keep it concise; avoid long clauses.

Examples adapted to CushLabs (style, not final):

- “Founder, CushLabs.ai | AI Assistants for Support + Knowledge | Reduce repeat tickets, capture leads”
- “AI Engineering Studio Founder | Support Automation + Knowledge Systems | Built for lean teams”

---

## About section rules (Hook → Story → CTA)

Strategy: Do not summarize the resume; tell the operating story.

### About structure (English)

- Hook: “I’ve always been obsessed with [core problem you solve].”
- Story: years of experience + credibility + approach (clarity + production discipline)
- What you do now: outcomes + who it’s for
- CTA: low friction next step

### About structure (Spanish)

- Same structure, slightly more formal/warm depending on preference.
- Keep Spanish crisp; avoid flowery corporate Spanish.

Length guidance:

- 1,200–2,000 characters is usually ideal for skimmability, but if user requests shorter, comply.

---

## Experience section rules (Achievements > Duties)

Strategy: every role should read like outcomes, not responsibilities.

For each experience entry:

- 3–6 bullets
- Use strong verbs: led, delivered, reduced, improved, shipped, standardized, implemented
- Add context: scope, constraints, stakeholders
- No invented metrics; if you lack metrics, use:
  - “reduced manual effort by standardizing…”
  - “improved reliability by…”
  - “shortened time-to-answer by implementing…”

Templates:

- EN: “Built/standardized X to achieve Y under constraint Z.”
- ES: “Implementé/estandaricé X para lograr Y bajo la restricción Z.”

---

## Skills section rules (Bilingual keyword indexing)

Strategy: Add skills in both languages because LinkedIn treats them separately.

Rules:

- Include paired skills where natural: “Project Management” + “Gestión de proyectos”
- Prioritize:
  - client-facing outcomes (support automation, knowledge management)
  - delivery skills (project management, stakeholder management)
  - technical foundations (architecture, systems, integrations)
- Avoid stuffing irrelevant skills.

---

## Featured section rules (trust builders)

Featured items should prove:

- you’re real
- you ship
- you think clearly

Recommended Featured items:

- “How I work” one-pager (Clarity Sprint outline)
- “Assistant evaluation checklist” (guardrails + handoff)
- Link to website homepage / booking page
- A short case-style post (no fake case study; use “example scenario”)
- Testimonials page (coaching is acceptable proof)

---

## CTA rules (profile-level)

Choose one primary CTA and repeat gently:

- “Book a Free 20-Min Clarity Call”
  OR
- “DM me ‘CLARITY’ and I’ll ask 3 questions”

Friction reducers to include:

- free
- no commitment
- clear next steps

---

## Claims & credibility rules (must obey claims-policy)

Never:

- guarantee outcomes
- claim “no hallucinations” / “no data leaks” / “won’t affect SEO”
- invent client case studies or metrics

Do:

- use approved proof points only (Fortune 500 IT leadership, consulting, solopreneur, 5-star rating, testimonials)
- use safe language: “built with guardrails,” “designed to,” “we validate”

---

## QA checklist (must run before final output)

- Does the headline communicate niche + outcome in 10 seconds?
- Are EN + ES keywords present (headline/about/skills)?
- About follows Hook → Story → CTA and is skimmable?
- Experience bullets read like achievements (not duties)?
- Proof points are accurate and non-inflated?
- CTA is clear and low-friction?
- No hype, no absolutes, no invented metrics?

---

## Defaults (if user gives minimal input)

- Target: mixed (Mexico/LATAM + North America)
- CTA: Book a Free 20-Min Clarity Call
- Language: EN+ES (EN headline; ES keywords in About/Skills)
- Keyword stack defaults:
  - EN: AI assistants, customer support automation, knowledge base, lead qualification, internal knowledge search
  - ES: asistentes de IA, automatización de soporte al cliente, base de conocimiento, calificación de prospectos, búsqueda interna
