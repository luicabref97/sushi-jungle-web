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

### ADR-001: Next.js 16 App Router
- **Date:** 2026-04-05
- **Decision:** Usar Next.js 16 con App Router como framework principal
- **Alternatives considered:** Vite + React (prototipo actual), Astro, Remix
- **Rationale:** SSR nativo para SEO local (crítico para restaurante en Doral), optimización automática de imágenes, Server Components, deploy zero-config en Vercel, API routes para formularios de contacto/reservación
- **Status:** Accepted

### ADR-002: Design System "Tropical Jungle" (NO Neon)
- **Date:** 2026-04-05
- **Decision:** Reemplazar el design system "Neon Jungle Report" por "Tropical Jungle" — verdes selva profundos, dorados cálidos, texturas naturales (bambú, madera, piedra volcánica)
- **Alternatives considered:** Neon Jungle Report (prototipo original), Elegante/Premium minimalista, Moderno/Clean editorial, Fusión Cultural japonesa-peruana
- **Rationale:** El concepto Neon no representa la marca del restaurante. La dirección tropical vibrante enfatiza lo "Jungle" de Sushi Jungle, conecta con la fusión japonesa-peruana, y crea una identidad visual única que diferencia de competidores en Doral
- **Status:** Accepted

### ADR-003: GSAP + ScrollTrigger + Lenis para animaciones
- **Date:** 2026-04-05
- **Decision:** Usar GSAP con ScrollTrigger y Lenis para scroll cinemático. NO usar Framer Motion
- **Alternatives considered:** Framer Motion, CSS scroll-driven animations, Motion (motion.dev), vanilla JS IntersectionObserver
- **Rationale:** GSAP + ScrollTrigger es el estándar de la industria para animaciones de scroll cinemáticas (usado en GTA VI, Jesko Jets, Apple). Permite video pinned, parallax multi-capa, máscaras SVG, y SplitText. Lenis proporciona smooth scrolling (usado en Terminal Industries). Framer Motion es más limitado para estos efectos
- **Status:** Accepted

### ADR-004: shadcn/ui + Tailwind CSS v4
- **Date:** 2026-04-05
- **Decision:** Usar shadcn/ui como sistema de componentes con Tailwind CSS v4
- **Alternatives considered:** Material UI, Chakra UI, Radix directo, CSS Modules
- **Rationale:** Ya usado en prototipo (App.tsx importa Toaster/TooltipProvider), excelente soporte dark theme, componentes como source code (customizables), oklch color format, ligero y sin runtime overhead
- **Status:** Accepted

### ADR-005: Deploy en Vercel
- **Date:** 2026-04-05
- **Decision:** Desplegar en Vercel
- **Alternatives considered:** Netlify, Cloudflare Pages, AWS Amplify, self-hosted
- **Rationale:** Plataforma nativa de Next.js, preview deployments para revisión del cliente, edge functions, analytics/speed insights built-in, CLI instalado, dominio personalizable
- **Status:** Accepted
