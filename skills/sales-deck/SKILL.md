# Skill: Sales Deck (Diagnostic Deck) — CushLabs.ai

## Goal

Create a **10-slide Diagnostic Deck outline** (not a hype pitch deck) that:

- validates the client’s pain and context
- explains the market shift creating urgency
- shows why common attempts fail (the gap)
- proposes a clear method (CushLabs Clarity Sprint → Build → Iterate)
- ends with a low-friction next step: **scope a Sprint**

Output is an outline + speaker notes + recommended visuals/diagrams per slide.

---

## Triggers

Use this skill when the user asks for:

- sales deck
- pitch deck (convert into diagnostic deck)
- client deck
- discovery deck
- “deck outline”
- “10 slides”
- “proposal slides”
- “diagnostic deck”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json` (for pain language + objections)

Always load: 3) `/context/core/business-profile.json` (methodology + offers + CTA)

Load if present: 4) `/context/core/claims-policy.json`

Optional:

- Search `/knowledge/templates/` for any existing one-pagers, sprint outlines, or proof blocks
- If client/industry-specific: search `/knowledge/notes/` for relevant examples

---

## Inputs

### Required (ask max 3 questions only if missing)

- Audience: founder/GM | ops/support lead | IT/engineering lead | mixed
- Industry/context: services | logistics | industrial | SaaS | e-commerce (or specific)
- Primary pain: support overload | leads after hours | scattered knowledge | onboarding | internal ops
- Desired outcome: reduce repetitive tickets | faster time-to-answer | better lead capture | centralized knowledge

### Optional (high value)

- Client maturity: early (no KB) | mid (scattered docs) | advanced (helpdesk + data sources)
- Deployment constraints: website performance/SEO sensitive | WhatsApp heavy | compliance sensitivity
- Language: EN | ES | EN+ES
- Deck use: first meeting | after discovery | proposal follow-up
- Proof emphasis: enterprise IT leadership | solopreneur track record | testimonials
- CTA preference: “scope a Clarity Sprint” (default)

If missing, assume:

- audience = founder + ops/support
- maturity = mid
- language = EN
  State assumptions in one short line, then draft.

---

## Output format (strict)

Provide a 10-slide outline with:

For each slide:

1. **Slide title** (max 8 words)
2. **One-sentence purpose**
3. **3–5 bullets** (what’s on the slide)
4. **Speaker notes** (2–5 lines; calm, diagnostic)
5. **Visual/diagram description** (specific; what to draw)
6. **Client prompt question** (one question to ask live)

Then include:

- **Objection map** (top 5 objections + where to address them)
- **Customization notes** (what to swap based on industry)
- **One-page close script** (what to say on Slide 10)

---

## Deck narrative (mandatory)

This is a Diagnostic Deck, structured in four acts:

### Slides 1–3: THE SHIFT

“The world changed, creating a new gap in your business.”

- Examples of shift framing:
  - AI is now cheap and accessible
  - customer expectations for instant answers increased
  - knowledge sprawl (Docs/WhatsApp) is now a bottleneck
  - lean teams can’t scale support manually

### Slides 4–6: THE GAP

“Most teams try [common mistake], but it fails because [reason].”

- Common mistakes to use (pick 2–3):
  - buying a tool and calling it a strategy
  - shipping a fragile demo
  - dumping messy docs into a bot
  - skipping evaluation and guardrails
  - embedding heavy widgets that hurt performance/SEO
- Reasons they fail:
  - unclear requirements and success metrics
  - bad knowledge hygiene (no source of truth)
  - no handoff rules
  - no measurement loop

### Slides 7–9: THE SOLUTION

“We solve it with the CushLabs methodology (Clarity Sprint → Build → Measure).”

- Must include:
  - scope control
  - risk controls (guardrails + handoff)
  - outcome measurement (no invented numbers; propose metrics)

### Slide 10: THE NEXT STEP

“Let’s scope a Sprint.”

- Clear CTA and what they get from it

---

## Voice rules (non-negotiable)

- Calm, sharp, executive-friendly.
- No hype. No “AI will change everything.”
- Diagnostic tone: “let’s look at your situation.”
- Prefer tradeoffs and clarity over flashy claims.
- Avoid “chatbot”; use “assistant” / “support system” / “knowledge system.”

---

## Claims & credibility rules (must obey claims-policy)

- No absolutes or guarantees.
- No invented metrics (deflection %, conversion lifts).
- Use safe language:
  - “designed to”
  - “built with guardrails”
  - “human handoff when uncertain”
  - “performance-conscious deployment”
  - “we measure and iterate”
- Proof points must be approved (business-profile.json / user-provided facts only).

---

## Slide-by-slide templates (recommended content)

### Slide 1 — Title + Positioning

Purpose: establish “diagnostic” framing.

- Visual: simple title + subtitle + one-line promise
- Prompt: “Before solutions—what’s the cost of the current pain?”

### Slide 2 — The Shift (Market Reality)

Purpose: show why now.

- Visual: timeline or “cost curve” (AI cost down, expectations up)
- Prompt: “What changed in the last 12–24 months for your customers/team?”

### Slide 3 — The New Gap (Business Impact)

Purpose: translate shift to their operations.

- Visual: “expectations vs. capacity” gap chart
- Prompt: “Where are you feeling the gap: support, leads, onboarding, or knowledge?”

### Slide 4 — Common Attempt #1 (Tool ≠ System)

Purpose: highlight mistake.

- Visual: “buy tool → chaos continues” loop diagram
- Prompt: “What have you already tried?”

### Slide 5 — Common Attempt #2 (Messy Knowledge In)

Purpose: show root cause: knowledge hygiene.

- Visual: messy sources → assistant → inconsistent answers
- Prompt: “Where does your knowledge live today (Docs, WhatsApp, helpdesk)?”

### Slide 6 — Why It Fails (No Guardrails + No Measurement)

Purpose: failure mechanics.

- Visual: 2x2 grid: guardrails vs. no guardrails; measurement vs. no measurement
- Prompt: “What’s the reputational risk of a wrong answer in your business?”

### Slide 7 — Our Method (Clarity Sprint)

Purpose: introduce the path.

- Visual: 5–10 day Sprint flowchart (scope → sources → guardrails → success metrics)
- Prompt: “If we could prove value in a small v1, where would you start?”

### Slide 8 — Build & Launch (Production Discipline)

Purpose: explain what gets delivered.

- Visual: clean pipeline: sources → curated KB → assistant behaviors → channels
- Prompt: “Which channel matters most first: website, WhatsApp, internal team?”

### Slide 9 — Measure & Improve (Iteration Loop)

Purpose: show continuous improvement without chaos.

- Visual: loop: questions → gaps → updates → evaluation → better answers
- Prompt: “What metric would convince you this is working?”

### Slide 10 — Next Step (Scope the Sprint)

Purpose: close with clarity.

- Visual: 3 bullets: what you get + timeline + decision point
- Prompt: “Do you want to scope Sprint options this week?”

(When generating the deck, fill these with the client’s chosen pain and industry.)

---

## Objection map (include in output)

Cover these 5 objections and indicate slide placement:

1. “How much does it cost?” (Slide 10 + follow-up)
2. “How long does it take?” (Slide 7–10)
3. “What if it gives wrong answers?” (Slide 6–9)
4. “Security/privacy concerns” (Slide 8–9)
5. “Will this hurt website performance/SEO?” (Slide 5 or 8)

---

## Customization notes (include in output)

- Swap examples to match industry.
- Use their terminology (helpdesk/tickets vs. inquiries vs. RFQs).
- If Spanish-first client: note bilingual partner option and bilingual outputs.
- Keep deck to 10 slides; reduce text, increase clarity.

---

## QA checklist (must run before final output)

- Does Slide 1 frame this as diagnostic (not “look at me”)?
- Do slides 1–3 clearly explain the shift and business gap?
- Do slides 4–6 explain why common approaches fail, credibly?
- Do slides 7–9 propose a clear, scoped methodology (Clarity Sprint)?
- Are visuals described clearly for each slide?
- No hype, no absolutes, no invented metrics or case studies?
- CTA is one clear next step (scope a Sprint)?

---

## Defaults (if user gives minimal input)

- Audience: founder + ops/support
- Industry: services + cross-border
- Pain: repeat questions + leads after hours
- Outcome: reduce repetitive tickets + capture more qualified leads
- Language: English
- CTA: scope a Clarity Sprint
