# Skill: Contact Page (CushLabs.ai)

## Goal

Write a high-converting Contact page that:

- feels calm, premium, and straightforward (no hype)
- reduces friction and anxiety (“what happens after I reach out?”)
- qualifies leads gently (so you don’t attract bad-fit projects)
- routes people to the best next step (primary CTA: free clarity call)

The Contact page should make it easy to take action and hard to misunderstand the process.

---

## Triggers

Use this skill when the user asks for:

- “contact page”
- “contact us copy”
- “get in touch page”
- “inquiry form copy”
- “book a call page”
- “contact section”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json`

Load when CTA/offers are involved (default: YES): 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json` (or claims-policy.md)

Optional (only if user references them):

- Search `/knowledge/templates/` for existing CTAs, bios, or contact snippets

---

## Inputs

### Required (ask max 3 questions only if missing)

- Primary contact path: **Book a Free Clarity Call** (default) OR Contact form OR Email
- Secondary contact path (optional): WhatsApp | Email | LinkedIn
- Audience: Mexico/LATAM SMB | North America | mixed

### Optional (recommended)

- Page goal: qualify leads | increase submissions | route to booking
- Language: EN | ES | EN+ES
- Contact form fields (if known): name, company, email, role, website, pain, message, budget, timeline
- “English-first delivery” placement: include (default) as a gentle qualifier line

If details are missing, assume:

- primary CTA = book a clarity call
- secondary CTA = email

State assumptions in **one line** and proceed.

---

## Output format (strict)

Deliver the page in Markdown with these sections:

1. H1 + short intro (2–3 sentences)
2. Primary CTA block (button text + microcopy)
3. “What happens next” (3-step process)
4. Quick qualification (“Good fit if…” / “Not a fit if…”)
5. Contact form microcopy:
   - short label text + helper text for each field
   - submit button text
   - privacy reassurance line (safe, non-absolute)
6. Alternate contact options (2–4 bullets)
7. FAQ mini (3–5 Q&As max, contact-related only)

---

## Default page structure (recommended content)

### 1) H1 options (pick one)

- “Let’s make the next step clear.”
- “Tell me what you’re trying to solve.”
- “Get a clear plan in 20 minutes.”

### 2) Primary CTA block

Include:

- Button text: “Book a Free Clarity Call”
- 1–2 lines of friction reducer:
  - free, no commitment, you’ll leave with next steps

### 3) What happens next (3 steps)

Example format:

1. You share context (2–3 minutes)
2. We clarify the real problem + success metric
3. You get a clear next step (sprint / build / not a fit)

### 4) Good fit / Not a fit (qualifier)

Must include English-first constraint in a confident, non-apologetic way:

- Good fit: you have an English-speaking point of contact OR you accept bilingual partner add-on.
- Not a fit: Spanish-only coordination with no champion/partner.

### 5) Contact form microcopy

Keep field helper text short and concrete.
Encourage specifics: examples of repeat questions, support volume, lead sources, knowledge locations.

### 6) Alternate contact options

Offer:

- Email
- LinkedIn
- Optional WhatsApp (only if you actually want it)

### 7) Mini FAQ (contact-related)

Topics:

- “Is the call really free?”
- “Do you work with Spanish-only teams?”
- “What should I bring to the call?”
- “How fast do you respond?”
- “What happens if it’s not a fit?”

---

## Voice & tone rules (non-negotiable)

- Calm, direct, confident.
- No “sales-y” pressure.
- Avoid buzzwords and model talk.
- No guilt-based language (“don’t miss out!”).
- “Assistant” not “chatbot.”

---

## Claims & credibility rules (must obey claims-policy)

- No absolute guarantees (security, response time, outcomes).
- Privacy reassurance must be safe:
  - OK: “We’ll confirm what data is stored and where before anything goes live.”
  - Not OK: “We never store data” (unless true).
- Do not claim response SLAs unless defined.

Allowed proof usage (optional, light):

- one short credibility line (approved proof only) near the bottom.

---

## Form fields (recommended default set)

Use these unless user specifies otherwise:

- Name
- Email
- Company
- Role
- Website (optional)
- What are you trying to fix? (short textarea)
- Where does your knowledge live? (Google Docs / PDFs / WhatsApp / Helpdesk / Other)
- Preferred next step: (Clarity Call / Email response)

---

## QA checklist (must run before final output)

- Is the primary CTA obvious and low-friction?
- Is the “what happens next” process clear and reassuring?
- Are fit filters present (good fit / not a fit)?
- Is the English-first constraint included once, calmly?
- Any risky guarantees? Remove/rephrase.
- Does it feel premium and human—not like a generic SaaS form?

---

## Defaults (if user gives minimal input)

- Audience: Mexico/LATAM SMB founder or ops/support lead
- Primary CTA: Book a Free Clarity Call
- Secondary: Email
- Language: English
- Add one fit-filter line about English-first delivery
