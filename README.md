# Context Engineering Kit (v2.0)

A modular, production-ready system for generating **high-leverage business assets**  
(landing pages, sales decks, case studies, posts, emails) that **strictly adhere to your voice, your audience, and your business logic**.

This is not a prompt library.  
It’s an **operating system for AI-assisted writing**.

---

## 🚀 Why This Exists

Most AI writing fails because it:

- sounds generic
- invents facts
- ignores positioning
- drifts over time
- can’t reuse what already worked

The Context Engineering Kit solves this by separating **truth**, **structure**, and **examples** into explicit, enforceable layers.

---

## ✨ Key Features

### 🧠 Context-Driven by Design

- **Voice DNA** → how you sound (tone, cadence, banned phrases)
- **ICP** → who you’re speaking to (pains, desires, objections)
- **Business Profile** → what you actually offer (no hallucinated pricing or features)

### 🧩 Skill-Based Asset Generation

- Each content type has a dedicated **Skill** (`SKILL.md`)
- Skills define structure, rules, QA checks, and constraints
- Reusable across landing pages, decks, emails, posts, and more

### 🧠 Memory That Compounds

- Store “gold standard” examples once
- Reuse tone, patterns, and phrasing automatically
- Keep drafts, notes, and templates cleanly separated

### 🛡️ Anti-Hype & Anti-Hallucination

- Claims are constrained by business reality
- No invented metrics, fake case studies, or marketing fluff
- Designed for credibility-first B2B communication

### 🪟 Windows-Friendly

- No hidden folders
- No special tooling required
- Works with Cursor, Windsurf, Claude Projects, ChatGPT, or any LLM

---

## ⚡ Quick Start

### 1. Setup

Copy this repository into your project root.

### 2. Initialize the Core Profiles (The “Brain”)

Run these once to teach the system who you are:

1. **Voice DNA**

   - Open `/prompts/voice-dna-creator.md`
   - Paste into your AI chat
   - Save output to: `/context/core/voice-dna.json`

2. **ICP (Ideal Client Profile)**

   - Open `/prompts/icp-creator.md`
   - Paste into your AI chat
   - Save output to: `/context/core/icp.json`

3. **Business Profile**
   - Open `/prompts/business-profile-creator.md`
   - Paste into your AI chat
   - Save output to: `/context/core/business-profile.json`

### 2. /docs/

### 3. Activate

Point your AI assistant to **`CLAUDE.md`**  
(or `.cursorrules` / project instructions) as the system prompt.

---

## 🧠 System Architecture

```text
C:.
|   CLAUDE.md
|   README.md
|   STRUCTURE.md
|
+---archive
+---context
|   \---core
|           business-profile.json
|           claims-policy.json
|           icp.json
|           voice-dna.json
|
+---docs
|       claims-policy-info.md
|
+---knowledge
|   +---content
|   |   +---about-page
|   |   |       about-page.md
|   |   |
|   |   +---blog-post
|   |   |       blog-post.md
|   |   |
|   |   +---case-study-snapshot
|   |   |       case-study-snapshot.md
|   |   |
|   |   +---cold-email
|   |   |       cold-email.md
|   |   |
|   |   +---contact-page
|   |   |       contact-page.md
|   |   |
|   |   +---faq
|   |   |       faq.md
|   |   |
|   |   +---landing-page
|   |   |       landing-page.md
|   |   |
|   |   +---linkedin-post
|   |   |       linkedin-post.md
|   |   |
|   |   +---linkedin-profile
|   |   |       linkedin-profile-ai-consultant.md
|   |   |
|   |   +---sales-deck
|   |   |       sales-deck.md
|   |   |
|   |   \---website-hero
|   |           website-hero.md
|   |
|   +---drafts
|   +---notes
|   \---templates
|       +---bios
|       |       bios.md
|       |
|       +---cta
|       |       cta.md
|       |
|       +---objections
|       |       objections.md
|       |
|       +---proof
|       |       proof.md
|       |
|       \---snippets
|               snippets.md
|
+---prompts
|       business-profile-creator.md
|       icp-creator.md
|       voice-dna-creator.md
|
\---skills
    +---about-page
    |       about-page.md
    |
    +---blog-post
    |       blog-post.md
    |
    +---case-study
    |       case-study.md
    |
    +---cold-email
    |       cold-email.md
    |
    +---contact-page
    |       contact-page.md
    |
    +---cta-block
    |       cta-block.md
    |
    +---faq
    |       faq.md
    |
    +---landing-page
    |       landing-page.md
    |
    +---linkedin-post
    |       linkedin-post.md
    |
    +---linkedin-profile
    |       linkedin-profile.md
    |
    +---linkedin-text-message
    |       linkedin-text-message.md
    |
    +---notebooklm
    |       notebooklm.md
    |
    +---prof-block
    |       prof-block.md
    |
    +---proposal-document
    |       proposal-document.md
    |
    +---sales-deck
    |       sales-deck.md
    |
    +---services-page
    |       services-page.md
    |
    +---twitter
    |       twitter.md
    |
    \---website-hero
            website-hero.md


```

## 🧠 Core Profiles Explained

The system relies on a small set of **Source of Truth** files.
If output feels generic, inaccurate, or “AI-ish,” these are the first files to check.

| File                    | Purpose                         | Why It Matters                |
| ----------------------- | ------------------------------- | ----------------------------- |
| `voice-dna.json`        | Tone, cadence, banned language  | Prevents “AI marketing voice” |
| `icp.json`              | Pains, goals, objections        | Enables real resonance        |
| `business-profile.json` | Offers, pricing logic, delivery | Prevents hallucinated claims  |
| `claims-policy.json`    | What may / may not be claimed   | Enforces credibility          |

## ''

## 🛠️ How Asset Generation Works

### 1. The Call (Natural Language)

You simply ask:

> “Write a landing page for the Clarity Sprint.”

### 2. The System Routes Automatically

- Detects the content type
- Loads the relevant **Skill**
- Loads **Core Context**
- Pulls examples from **Knowledge**
- Generates structured, on-brand output

No prompt engineering required.

---

## 🧩 Creating New Skills

Create a new Skill when you repeat a task more than twice.

1. Copy `/skills/SKILL-TEMPLATE.md`
2. Rename the folder (e.g. `/skills/twitter-thread/`)
3. Define:
   - Goal
   - Triggers
   - Inputs
   - Output format
   - Claims & QA rules

The system will automatically use the Skill when triggered.

---

## 🧠 Knowledge Layer (Why This Compounds)

### `/knowledge/content/`

- Finished, polished examples
- Shows what “good” looks like
- Referenced automatically for consistency

### `/knowledge/templates/`

Reusable blocks:

- CTAs
- Proof
- Bios
- Objection handling
- Microcopy

This is how the system **gets better over time instead of drifting**.

---

## 🔧 Maintenance & Troubleshooting

### The AI sounds generic

- **Check:** `voice-dna.json`
- **Fix:** Add better writing samples and re-run the creator

### The AI invents pricing or features

- **Check:** `business-profile.json`
- **Fix:** Update or re-run the profile

### The AI ignores Skill rules

- **Check:** Does the trigger phrase match?
- **Fix:** Make triggers explicit in `SKILL.md`

---

## 🧰 Tech Stack & Compatibility

- Markdown-based
- JSON for structured truth
- PowerShell-friendly

Works with:

- Claude Projects
- Cursor
- Windsurf
- ChatGPT
- Any RAG-enabled system

No vendor lock-in.

---

## 📜 Version History

**v2.0**

- Asset-first architecture
- Explicit Skills + Knowledge layers
- Windows-friendly structure
- Claims-safe writing constraints

**v1.0**

- Initial context-based writing system

---

## 🧭 Philosophy

> Structure beats prompts.
> Truth beats cleverness.
> Systems beat inspiration.

This kit is designed for people who want **repeatable clarity**, not AI theater.

```

```
