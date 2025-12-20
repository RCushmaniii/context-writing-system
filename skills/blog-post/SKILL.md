# Skill: Blog Post (CushLabs.ai)

## Goal

Write high-performing blog posts that:

- sound like the CushLabs founder voice (calm, sharp, no hype)
- match the ICP’s real pains (support overload, scattered knowledge, leads leaking after hours)
- teach practical thinking (clarity → tradeoffs → steps)
- build trust and drive a single primary CTA (usually: Book a Free Clarity Call)

This skill produces **publish-ready** posts with clear structure, skimmability, and conversion intent—without sounding salesy.

---

## Triggers

Use this skill when the user asks for:

- “write a blog post”
- “article”
- “SEO post”
- “thought leadership article”
- “content for the blog”
- “pillar page” / “guide”
- “comparison post” (e.g., ChatGPT vs RAG)
- “how-to” / “framework” / “checklist”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json`

Load when CTA, offers, or positioning are present (default: YES for blog posts): 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json` (or claims-policy.md)

Then check:

- `/skills/` for any sub-skill relevant to the post type (e.g., FAQ snippets, hero blocks)
- `/knowledge/` if the user references past content or wants consistency with existing messaging

---

## Inputs

### Required (ask max 3 questions only if missing)

- Topic (what the post is about)
- Audience segment (from icp.json): founder | ops/support lead | IT/engineering lead
- Post intent: educate | persuade | build trust | convert | announce
- Primary CTA: default “Book a Free 20-Min Clarity Call” (unless user specifies)

### Optional (high value)

- Post type: how-to | framework | checklist | myth-busting | comparison | case-style narrative (no fake case studies)
- Funnel stage: top (awareness) | middle (consideration) | bottom (decision)
- Length: short (700–900) | standard (1,000–1,500) | long (1,800–2,500)
- Language: EN | ES | EN+ES
- SEO focus keyword + 3 supporting keywords (if not provided, infer and state assumptions)
- “Do not mention”: list of words/claims to avoid

If inputs are missing, proceed with **sensible assumptions**, state them in **one short line**, and write.

---

## Output format (strict)

### Deliverables

1. **Title (H1)** – 1 option (or 5 options if user asks)
2. **Meta description** – 145–160 characters
3. **Slug** – lowercase, hyphenated
4. **TL;DR** – 2–3 sentences (must be skimmable)
5. **Article body** – formatted in Markdown, with:
   - clear H2/H3 sections
   - short paragraphs (1–3 lines)
   - occasional bullets for clarity
6. **Primary CTA block** – 2–4 lines near the end
7. **Optional: CTA micro-block** – 1 line early in the post (only for bottom-of-funnel)

### Article structure (default)

- H1 Title
- Hook (2–4 short paragraphs)
- Problem framing (ICP language)
- Core concept / framework
- Step-by-step implementation guidance
- Mistakes & edge cases
- Simple checklist / summary
- CTA block

---

## Style & voice rules (non-negotiable)

- Calm, sharp, clear. No hype. No “AI evangelist” vibe.
- Prefer plain language and concrete examples.
- Use tradeoffs language (“what you gain / what you give up”).
- Avoid “we build chatbots”; use: **assistant**, **support system**, **knowledge system**.
- Avoid buzzwords: revolutionary, cutting-edge, game-changing, 10x, disrupt, magical.
- Do not mention model names (GPT, Claude, LLMs) unless user explicitly requests it.
- No “as an AI…” disclaimers or meta-commentary.

---

## Content strategy rules (what makes this effective)

### A) Start from a real pain (ICP)

Always connect the topic to one of these:

- repeat questions are eating the business
- leads leak after hours
- knowledge is scattered (“ask Juan”)
- onboarding takes too long
- teams fear wrong answers / reputation risk
- performance/SEO concerns

### B) Teach a simple framework

Examples (choose one per post):

- “Clarity → v1 → measure → iterate”
- “Knowledge quality beats model quality”
- “Guardrails + handoff > confident guessing”
- “Small v1 that proves value”

### C) Provide a concrete implementation path

Even if the reader never hires you, they should finish thinking:

- “I know what to do next.”
- “This person is legit.”

### D) Soft conversion

The CTA should feel like:

- a low-friction next step
- a clarity service, not a sales trap

---

## Claims & credibility rules (must obey claims-policy)

### Never

- promise “no hallucinations”
- claim “no data leaks”
- guarantee SEO/performance outcomes
- invent metrics or ROI numbers
- imply case studies you don’t have

### Instead use safe language

Accuracy:

- “built with guardrails”
- “source-grounded answers”
- “human handoff when uncertain”
- “evaluation and iteration”

Security:

- “privacy-aware design”
- “least-privilege access”
- “documented data handling”
- “access controls appropriate to deployment”

Performance:

- “minimal footprint deployment”
- “performance-conscious implementation”
- “validate page speed”

Proof:
Use only approved proof points (business-profile.json + explicit user-provided facts).

---

## CTA rules

Default CTA:

- **Book a Free 20-Minute Clarity Call**
  Friction reducers to include:
- “free”
- “no commitment”
- “you’ll leave with a clear next step”

CTA placement:

- Always include **one** CTA block near the end
- Optional early micro-CTA only for bottom-of-funnel posts
- Do not spam CTAs throughout the article

---

## Post types (choose one pattern)

### 1) How-to Guide (most common)

- Problem → steps → checklist → CTA

### 2) Framework / Mental model

- Misconception → framework → examples → CTA

### 3) Checklist post

- Quick framing → checklist → short explanations → CTA

### 4) Comparison post (careful)

- When A wins / when B wins → tradeoffs → recommended path → CTA
- Avoid bashing competitors; be fair and grounded.

### 5) Myth-busting

- “The myth” → why it fails in practice → what to do instead → CTA

---

## QA checklist (must run before final output)

- Does the first screen hook the ICP pain clearly?
- Is the language calm and non-hype?
- Is the structure skimmable with good H2s?
- Did we avoid absolutes and invented metrics?
- Did we avoid “chatbot” and model-name talk?
- Does the post teach something practical (steps/checklist)?
- Is there exactly one strong CTA block near the end?
- Are proof points accurate and limited to approved items?
- Does the post feel like “clarity → build,” not “AI magic”?

---

## Defaults (if user gives minimal input)

- Audience: Mexico & LATAM SMB founder or ops/support lead
- Intent: educate + build trust
- Length: standard (1,000–1,500 words)
- CTA: Book a Free 20-Min Clarity Call
- Language: English
