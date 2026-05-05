# Task Plan: Update Park Dinner And Food FAQ

## Goal

Update the Saturday schedule item from `Park / Fellowship` to `Park / Dinner` and update the food FAQ answer to clarify that lunch is provided both days and dinner is only provided Saturday at the park.

## Existing Context

- `AGENTS.md` was reviewed for the required documentation-first and test-driven workflow.
- `README.md` was reviewed for project structure, routes, and test commands.
- `CODESTYLE.md` was reviewed for frontend style expectations.
- `package.json` was reviewed for available scripts.
- `src/pages/Schedule/Schedule.tsx` was reviewed for the current Saturday schedule item.
- `src/pages/FAQ/FAQ.tsx` was reviewed for the existing food answer.
- `tests/pages.spec.ts` was reviewed for existing schedule and FAQ route coverage.

## Expected Behavior

- The Saturday schedule should show `Park / Dinner` at `3:00 PM`.
- The FAQ answer for `Will food be provided?` should say lunch is provided both days and dinner is only provided Saturday at the park.
- Dietary restriction and allergy guidance should remain in the food FAQ.

## Test Plan

- Update the schedule Playwright test to expect `Park / Dinner`.
- Update the FAQ Playwright test to expand the food question and assert the new lunch/dinner copy.
- Run the updated targeted Playwright checks before production code changes and confirm they fail for the expected missing content.
- Run the full Playwright suite after implementation.
- Run the production build after implementation.

## Implementation Plan

1. Update Playwright assertions for the new schedule label and food FAQ answer.
2. Update the Saturday schedule data in `src/pages/Schedule/Schedule.tsx`.
3. Update the food FAQ answer in `src/pages/FAQ/FAQ.tsx`.
4. Re-run tests and build.
5. Record validation results in this plan.

## Documentation Plan

- Add this task plan under `docs/agent-plans/`.
- No README update is needed because routes, setup, and testing commands do not change.

## Baseline Notes

- A pre-change `npm test` run reported 12 passed and 2 failed due Mobile Safari `page.goto` timeouts on unrelated landing/footer tests. The schedule and FAQ tests passed before the requested edits.

## Validation Results

- Updated targeted Playwright assertions failed before production changes for the expected missing `Park / Dinner` and food FAQ copy.
- `npm test -- -g "schedule page lists|FAQ page expands"` passed after implementation: 4 passed.
- Final `npm test` passed after implementation: 14 passed.
- Final `npm run build` passed with existing Webpack performance warnings for large assets and entrypoint size.
