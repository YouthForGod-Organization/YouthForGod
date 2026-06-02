# Task Plan: Local Server Rule

## Goal
Add a repository instruction that Codex should not start the local development server unless explicitly requested because the user will run it themselves.

## Existing Context
- `AGENTS.md` was reviewed for project workflow and command guidance.
- `package.json` was reviewed earlier for the existing `npm start` local development command.

## Expected Behavior
Future agent work should avoid running `npm start` or otherwise starting a local dev server unless the user explicitly asks for it.

## Test Plan
- No automated tests are needed because this is a documentation-only instruction update.

## Implementation Plan
1. Add the local server rule to `AGENTS.md`.
2. Record the change in this task plan.

## Documentation Plan
- Update `AGENTS.md`.
- Add this task plan under `docs/agent-plans/`.

## Results
- Added a rule to `AGENTS.md` telling future agent work not to start the local development server unless the user explicitly asks.
- Stopped the previously started webpack dev server on port `3000`.
- No automated tests were run because this was a documentation-only instruction update.
