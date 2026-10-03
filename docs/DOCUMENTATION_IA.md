# Docs IA Migration (integratewise-live/apps/docs)

Follow-up for `integratewise-live` monorepo. Restructure `apps/docs/docs.json` to:

```text
Start here
  - index
  - quickstart

Product
  - product/* (all 22 pages)

Core concepts
  - the-solution/core-principles
  - product/shared-context-principle
  - product/canonical-vs-operational
  - product/fragmented-ai

Twin
  - product/twin
  - agents/twin

Business context
  - product/business-context
  - the-solution/business-context-first
  - product/business-continuity

Governance
  - product/governance
  - security-and-governance/*

Work and execution
  - how-it-works/*
  - product/workbench
  - product/connected-work

Continuity
  - how-it-works/continuity
  - product/business-continuity*

Platform
  - platform/* (promoted to top-level tab)

Reference
  - resources/api-reference
  - architecture/* (legacy whitelist)
```

Wire orphan MDX files currently on disk into navigation. Remove or fix 58 broken SpineWorkspace-tab links.

Marketing site links to `https://spine-innov-labs.mintlify.io/` from header and footer.
