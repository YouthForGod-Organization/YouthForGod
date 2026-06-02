# Task Plan: Approval Granularity Rule

## Goal
Add a repository instruction that Codex should not ask for approval on every individual line or file edit. When approval is needed, it should happen before the full implementation plan begins.

## Existing Context
- `AGENTS.md` was reviewed for the project workflow and approval expectations.
- `docs/agent-plans/2026-05-28-local-server-rule.md` was reviewed as a related agent-instruction update.

## Expected Behavior
Future agent work should ask for approval at the implementation-plan level when approval is needed, then proceed through the planned edits without repeated line-by-line confirmations. Exceptions remain for destructive actions, escalated commands, or meaningful changes outside the approved scope.

## Test Plan
- No automated tests are needed because this is a documentation-only instruction update.

## Implementation Plan
1. Add the approval granularity rule to `AGENTS.md`.
2. Record the change in this task plan.

## Documentation Plan
- Update `AGENTS.md`.
- Add this task plan under `docs/agent-plans/`.

## Results
- Added an `AGENTS.md` rule that approval, when needed, should happen before the full implementation plan rather than before every individual line, file, or small edit.
- Preserved exceptions for destructive actions, escalated commands, and meaningful work outside the approved scope.
- No automated tests were run because this was a documentation-only instruction update.
