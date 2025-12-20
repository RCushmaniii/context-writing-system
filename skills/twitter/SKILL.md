# Skill: Twitter / X Thread (Building in Public + Technical Education)

## Goal

Write high-signal Twitter/X threads that:

- build authority through **technical clarity**, not selling
- teach one complex AI/engineering concept OR share a real build win/fail
- follow a tight narrative (setup → context → aha → fix → takeaway)
- feel “engineer-to-engineer” or “CTO-to-CEO”
- optionally end with a light, non-sales CTA (follow / reply / read more)

Output: **6–8 tweets**, ready to post.

---

## Triggers

Use this skill when the user asks for:

- Twitter thread / X thread
- “building in public”
- technical education thread
- “break this down into tweets”
- RAG, assistants, evals, hallucinations, guardrails, retrieval, embeddings, performance
- “project win/fail thread”

---

## Required context (load order)

Always load:

1. `/context/core/voice-dna.json`
2. `/context/core/icp.json` (only if the thread targets buyers; otherwise optional)

Load if CTA/offers are referenced (usually NO for threads): 3) `/context/core/business-profile.json`

Load if present: 4) `/context/core/claims-policy.json`

Optional:

- Search `/knowledge/notes/` for build logs, postmortems, or project notes if the user references a real project.

---

## Inputs

### Required (ask max 3 questions only if missing)

- Topic OR build event (one sentence)
- Thread mode: technical concept | build win | build fail/postmortem
- Language: EN | ES | mixed (Spanglish acceptable in ES)

### Optional (high value)

- Audience stance: engineer-to-engineer | CTO-to-CEO
- Hook constraint: counter-intuitive truth OR hard number (if no verified number, use a counter-intuitive truth instead)
- Include code snippet? (default: no)
- Include checklist? (default: yes, 1 tweet max)
- End CTA: reply prompt | follow prompt | link prompt (default: reply prompt)

If any required input is missing, assume:

- thread mode = technical concept
- stance = engineer-to-engineer
- language = EN
  State assumptions in **one short line**, then write.

---

## Output format (strict)

- **6–8 tweets**, numbered (1/8, 2/8, etc.)
- Each tweet: ideally **<= 240 characters**
- No emojis (explicit rule)
- Use simple bullets where helpful (hyphen bullets)
- No hashtags unless explicitly requested (default: none)

---

## Thread structure (mandatory)

### 1) Hook (Tweet 1)

Must be one of:

- Counter-intuitive truth (preferred if numbers aren’t verified)
- Specific hard number (ONLY if verified by user/project data)

Examples (style only):

- “Most RAG failures aren’t retrieval. They’re requirements.”
- “The fastest way to break RAG is to skip evaluation.”

### 2) Setup (Tweet 2)

What problem are we solving? Why does it matter?

### 3) Context (Tweet 3)

Define the moving parts in plain language (no jargon dump).

### 4) The “Aha” moment (Tweet 4)

The key insight that flips the problem.

### 5) The Technical Fix (Tweets 5–6)

Concrete steps. Prefer a 3-step method. Optional mini bullets.

### 6) Takeaway (Tweet 7)

One clean rule of thumb or checklist.

### 7) Close (Tweet 8)

Engagement prompt (default):

- “What’s your failure mode with this?”
- “Want a checklist? Reply ‘checklist’.”

No hard selling. No “book a call” unless user explicitly requests.

---

## Tone rules (non-negotiable)

- Engineer-to-engineer OR CTO-to-CEO.
- Calm, direct, practical.
- No marketing voice. No hype. No buzzwords.
- No emojis.
- Prefer tradeoffs: “if you do X, you gain Y but lose Z.”

---

## Claims & numbers policy (critical)

- If you don’t have verified numbers, do NOT invent them.
- Prefer a counter-intuitive truth hook instead of fake stats.
- Avoid absolutes (guaranteed, always, never).
- If describing outcomes, frame as “designed to,” “typically,” “we measure.”

---

## Bilingual nuance (Spanish / LATAM dev circles)

If language = ES or mixed:

- Avoid unnatural direct translations of jargon.
- Use common Spanglish tech verbs when natural:
  - “deployar”, “loguear”, “trackear”, “el backend”, “el pipeline”
- Keep the sentence structure Spanish-first, with embedded English terms.

---

## Patterns (choose one per thread)

### Pattern A — “Failure mode → Fix”

- Here’s what breaks
- Why it breaks
- The fix
- The rule

### Pattern B — “Myth → Reality”

- The myth
- The reality
- The model
- The fix

### Pattern C — “Build log”

- What I shipped
- What broke
- What I changed
- What I’d do next time

---

## QA checklist (must pass)

- Hook is counter-intuitive OR a verified number (not invented).
- Structure matches: setup → context → aha → fix → takeaway.
- No emojis, no hashtags (unless requested).
- Each tweet is concise and skimmable.
- Fix is actionable (steps, not vibes).
- Close invites replies (not a sales CTA).
- If Spanish: tech terms sound natural (LATAM dev Spanglish).

---

## Defaults (if user gives minimal input)

- 8 tweets
- Language: English
- Stance: engineer-to-engineer
- Pattern: Failure mode → Fix
- Close: “What’s your biggest failure mode with this?”
