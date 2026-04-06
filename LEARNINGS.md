# Restaurante Web — Learnings Log

Every error corrected during development is documented here so agents and developers avoid repeating mistakes.
This follows Boris Cherny's agentic context engineering principle: auto-improvement via persistent error memory.

## Format

```
### [CATEGORY] Short description
- **Error:** What went wrong
- **Where:** File and line (or component)
- **Fix:** How it was corrected
- **Root cause:** Why it happened
- **Date:** YYYY-MM-DD
```

### Standard Categories

| Category | Use for |
|-----------|---------|
| `[IMPORTS]` | Import errors, module resolution, dependency issues |
| `[DEPLOY]` | Deployment failures, environment config, CI/CD |
| `[AUTH]` | Authentication, authorization, token issues |
| `[CONFIG]` | Configuration mistakes, env vars, settings |
| `[DATA]` | Data format, validation, serialization errors |
| `[API]` | API contract mismatches, endpoint issues |
| `[UI]` | Frontend rendering, styling, component bugs |
| `[TEST]` | Test failures, flaky tests, test setup |
| `[BUILD]` | Build failures, compilation errors |
| `[PERF]` | Performance regressions, memory leaks |
| `[SECURITY]` | Security vulnerabilities, PII exposure |

You can create custom categories for your domain. Keep category names short (1 word, uppercase).

---

## Log

*(Entries are added below, newest first)*
