# Task Plan: Agent Instructions

## Goal

Replace the short root `AGENTS.md` with practical Codex project instructions that require documentation-first, test-driven work in this repository.

## Existing Context

- `README.md` was reviewed for project purpose, stack, routes, layout, local development, and testing commands.
- `AGENTS.md` was reviewed for the existing minimal agent rules.
- `CODESTYLE.md` was reviewed for mobile-first styling guidance.
- `package.json` was reviewed for available npm scripts.
- `playwright.config.ts` was reviewed for the Playwright test setup and preview server behavior.
- `git status --short` was checked before editing.

## Expected Behavior

Future agent work should use the root `AGENTS.md` as the primary repository-specific workflow guide. The instructions should point agents to existing docs, require a task plan before production code changes, require tests when practical, and use the repo's real npm commands.

## Test Plan

- Run `npm test` before editing to confirm the current Playwright suite passes.
- Run `npm test` after editing to confirm the docs-only change did not affect the app.
- Run `npm run build` after editing to confirm the production bundle still compiles.
- No tests need to be added because this change only updates repository documentation and agent workflow instructions.

## Implementation Plan

1. Create `docs/agent-plans/` if it does not exist.
2. Add this task plan.
3. Replace the existing short `AGENTS.md` with the fuller project instructions.
4. Keep instructions aligned with the actual repo structure and npm scripts.
5. Re-run the relevant checks.

## Documentation Plan

- Update `AGENTS.md` with the repository-specific Codex workflow.
- Add `docs/agent-plans/2026-05-05-agent-instructions.md` to document this task.
