# Restaurante Web — Context for Claude Code

*Add your project description, tech stack, and key directories here.*

## Development Workflow (Boris Cherny Principles)

### Persistent Memory
- ALWAYS read `LEARNINGS.md` and `DECISIONS.md` at session start.
- ALWAYS update `LEARNINGS.md` when correcting any error. Format: [CATEGORY] + Error/Where/Fix/Root cause/Date.
- ALWAYS update `DECISIONS.md` when making architectural decisions. Format: ADR-NNN + Decision/Alternatives/Rationale/Status.

### Development Discipline
- Plan before coding: break non-trivial tasks into steps, present the plan before implementing.
- Verify your work: run the code, run tests, check edge cases after every change.
- Fix errors autonomously: try up to 3 approaches before asking the user. Always log the fix.
- Pursue elegance: follow existing patterns, keep functions small, remove dead code.
- Delegate to subagents: for complex tasks with 3+ independent subtasks, use subagents with focused context.
