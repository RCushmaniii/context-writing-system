# Skill: Business Solution Audio Briefer

## Goal

Generate a "Source of Truth" document to feed into NotebookLM (or similar audio generators). This document forces the AI hosts to discuss a **Business Challenge** and its **Solution** from a strategic, ROI-focused perspective, strictly avoiding technical jargon.

## Triggers

Use when the user asks for:

- "podcast about [business problem]"
- "audio content for clients"
- "NotebookLM brief"
- "video script for business owners"
- "explain the value of AI to a CEO"

## Required Context

Always load:

- `/context/core/icp.json` (To know who is suffering the problem)
- `/context/core/business-profile.json` (To know the solution logic)

## Inputs

Required:

1. **The Pain Point:** (e.g., "Support team is drowning," "Leads are going cold," "Data is messy")
2. **The Business Value:** (e.g., Lower Cost, Increase Sales, Save Time)
3. **The Target Audience:** (e.g., Founder, VP of Sales, Ops Manager)

## Output Strategy

The output must be a single, structured text document written in the third person. It acts as "The Article" the AI hosts are reading.

**Crucial Instruction for the AI Writer:**
Do not write a script. Write a **Strategic Briefing** that guides the conversation. The "Hosts" will read this and naturally discuss the points you emphasize.

## Output Structure (The "Briefing Doc")

### 1. The "Bleeding Neck" Problem (The Hook)

- Describe the business problem in emotional and financial terms.
- Use phrases like "burning cash," "missed opportunity," "operational drag."
- **Rule:** No technical root causes. Only business symptoms.
- _Example:_ "Why growing companies lose 40% of leads simply because they reply 2 hours too late."

### 2. The "Old Way" vs. The "New Way"

- **The Old Way:** Describe the manual, painful status quo (Spreadsheets, hiring more bodies, working weekends).
- **The Shift:** Explain that "Throwing more people at the problem" no longer works.
- **The New Way (AI):** Frame AI not as "technology" but as "Infinite Leverage" or "24/7 Capacity."

### 3. The Solution Mechanism (The "How" without Code)

- Explain the solution using **Business Analogies**.
- _Avoid:_ "RAG Pipeline," "Vector Database," "LLM."
- _Use:_ "A smart filing system that never forgets," "An assistant that reads every PDF instantly," "A filter that only passes the best leads to your humans."

### 4. The ROI & Outcome (The "Why")

- List 3 hard benefits:
  1.  **Speed:** (e.g., "Instant response vs. 24h delay")
  2.  **Cost:** (e.g., "Fixed cost vs. hiring 3 more admins")
  3.  **Quality/Sanity:** (e.g., "Founders get their weekends back," "No more copy-paste errors")

### 5. Host Persona Instructions (Hidden Control)

- Add a specific section at the bottom titled **"Key Takeaways for the Discussion"**:
  - "Emphasize that this is accessible _now_ for SMBs, not just Enterprises."
  - "Frame the solution as a 'Competitive Advantage'—if you don't do it, your rival will."
  - "Keep the tone optimistic but grounded. This isn't magic; it's just better operations."

## Style Rules for the Content

- **Vocabulary:** Use "Margin," "Overhead," "Conversion Rate," "Friction," "Scalability."
- **Banned Words:** "Code," "Python," "API," "Latency," "Parameters," "Tech Stack."
- **Tone:** Executive-level peer review. Two smart friends figuring out how to run a business better.

## QA Checklist

- Does this sound like a business strategy meeting or a dev standup? (Must be Strategy).
- Is the "Customer Pain" the hero of the story?
- Is the solution framed as an operational asset?
