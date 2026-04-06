# Restaurante Web — Architectural Decisions

Every significant architectural decision is recorded here for future reference.
This follows Boris Cherny's agentic context engineering principle: persistent decision memory.

## Format

```
### ADR-NNN: Short title
- **Date:** YYYY-MM-DD
- **Decision:** What was decided
- **Alternatives considered:** Other options evaluated
- **Rationale:** Why this option was chosen
- **Status:** Accepted | Superseded by ADR-NNN
```

## When to Record a Decision

Record a decision when you:
- Choose between 2+ libraries, frameworks, or tools
- Define a data model, API contract, or schema
- Select a deployment strategy or platform
- Adopt an architectural pattern
- Make a tradeoff (performance vs. readability, etc.)
- Change direction from a previous decision (mark the old one as Superseded)

## Tips for Good ADRs

- **Be specific.** "Use PostgreSQL" is better than "Use a relational database."
- **List real alternatives.** Only include options that were genuinely considered.
- **Explain the WHY.** The rationale is the most important field — it captures context that code can't.
- **Keep it concise.** Each ADR should be readable in under 60 seconds.
- **Number sequentially.** ADR-001, ADR-002, etc. Never reuse numbers.

---

## Decisions

*(ADRs are added below, in chronological order)*
