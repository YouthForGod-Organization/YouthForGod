# Task Plan: Update Registration Schedule And FAQ

## Goal

Update the conference schedule so registration, coffee cart, and park/fellowship times match the latest event plan. Update FAQ registration pricing copy to clarify that same-day registration remains $60 with no day-of upcharge.

## Existing Context

- `AGENTS.md` was reviewed for the required documentation-first and TDD workflow.
- `README.md` was reviewed for project structure, routes, and test commands.
- `CODESTYLE.md` was reviewed for frontend style expectations.
- `package.json` was reviewed for existing commands.
- `tsconfig.json`, `webpack.config.js`, and `playwright.config.ts` were reviewed for build and test setup.
- `src/pages/Schedule/Schedule.tsx` was reviewed for the current Friday and Saturday schedule entries.
- `src/pages/FAQ/FAQ.tsx` was reviewed for registration, pricing, and deadline answers.
- `src/pages/Registration/Registration.tsx` was reviewed to confirm no displayed registration price needs changing there.
- `tests/pages.spec.ts` was reviewed for existing route behavior coverage.

## Expected Behavior

- Friday should show registration at `8:00 AM`.
- Friday should show coffee cart open from `8:00 - 9:30 AM`.
- Saturday should show coffee cart open from `8:00 - 9:30 AM`.
- Saturday should show `Park / Fellowship` at `3:00 PM`.
- The FAQ should clearly state that same-day registration is still $60 and there is no day-of upcharge.
- The FAQ deadline answer should not contradict same-day registration availability.

## Test Plan

- Update the schedule Playwright test to assert the new registration, coffee cart, and park/fellowship schedule entries.
- Update the FAQ Playwright test to expand the registration pricing/deadline questions and assert the new same-day pricing copy.
- Run the updated tests before production code changes to confirm they fail for the expected missing content.
- Run the full Playwright suite after implementation.
- Run the production build after implementation.

## Implementation Plan

1. Add failing Playwright assertions for the new schedule and FAQ behavior.
2. Update `src/pages/Schedule/Schedule.tsx` with the requested times and wording.
3. Update the relevant FAQ answers in `src/pages/FAQ/FAQ.tsx`.
4. Re-run tests and build.
5. Document the change in the task plan.

## Documentation Plan

- Add this task plan under `docs/agent-plans/`.
- No README update is needed because the high-level route list and command documentation do not change.

## Validation Results

- Baseline `npm test` passed before changes: 14 passed.
- Updated Playwright assertions failed before production changes for the expected missing schedule and FAQ copy.
- Final `npm test` passed after implementation: 14 passed.
- Final `npm run build` passed with existing Webpack performance warnings for large assets and entrypoint size.
