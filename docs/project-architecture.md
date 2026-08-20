# Project Architecture

## Source structure

```text
src/
  app/                 Application composition, theme state, and navigation
  components/
    ui/                Reusable, feature-independent interface components
  features/
    recipes/           Recipe types, sample data, and recipe-specific components
    nutrition/         Future nutrition UI, types, state, and data logic
  pages/               Route-level screens that compose feature components
  lib/                 Small shared utilities and integrations
  types/               Types shared by more than one feature
  assets/              Local images, icons, and other static assets
  styles/              Design tokens and shared styling layers
  index.css            Global stylesheet and Tailwind entry point
  main.tsx             React entry point
```

## Implementation guidelines

Start a new capability inside the feature that owns it. For example, recipe search belongs in
`src/features/recipes`, while nutrition calculations belong in `src/features/nutrition`.

Keep a type inside its feature unless more than one feature needs it. Promote genuinely shared types
to `src/types`.

Pages should compose feature and shared UI components, rather than hold feature business logic. Add
a component to `src/components/ui` only when it is useful across multiple features, such as a
button, input, modal, or card.

## Current prototype boundaries

The Home, Recipes, Categories, and Search screens are a visual prototype backed by local sample
data. The current navigation uses browser paths for local development. Recipe persistence, detail
pages, real filtering, and production hosting behavior are not yet implemented.
