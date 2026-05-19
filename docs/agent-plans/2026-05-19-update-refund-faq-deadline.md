# Task Plan: Update Refund FAQ Deadline

## Goal
Update the refund FAQ answer so attendees see that the refund deadline is this week Thursday at 11:59 PM, with the deadline described as strict.

## Existing Context
- `README.md` was reviewed for route and testing documentation.
- `AGENTS.md` was reviewed for the documentation-first and test-driven workflow.
- `CODESTYLE.md` was reviewed; this task does not require style changes.
- `package.json` was reviewed for existing test and build commands.
- `tsconfig.json`, `webpack.config.js`, and `playwright.config.ts` were reviewed for app and test setup.
- `src/pages/FAQ/FAQ.tsx` was reviewed for the existing refund FAQ copy.
- `tests/pages.spec.ts` was reviewed for existing routed FAQ behavior coverage.
- Existing `docs/agent-plans/` files were reviewed for local planning format.

## Expected Behavior
The refund FAQ should tell users that refund requests must be submitted by Thursday, May 21 at 11:59 PM and that this is a strict deadline. The answer should avoid contradicting that deadline with the older 30-day policy text.

## Test Plan
- Update the FAQ Playwright test to expand the refund question and assert the strict Thursday 11:59 PM deadline copy.
- Run the targeted FAQ test before production changes to confirm it fails for the missing deadline copy.
- Run the targeted FAQ test after implementation.
- Run the production build after tests pass.

## Implementation Plan
1. Add a failing Playwright assertion for the refund deadline.
2. Update the refund FAQ answer in `src/pages/FAQ/FAQ.tsx`.
3. Update user-facing documentation to mention that the FAQ includes the refund deadline guidance.
4. Run the relevant tests and build.

## Documentation Plan
- Update `README.md` so future developers know the FAQ route includes refund deadline guidance.
- Keep this task plan updated with the final test/build outcome.

## Results
- Added Playwright assertions for the refund FAQ deadline.
- Confirmed the new assertions failed before the FAQ copy change because `Thursday, May 21 at 11:59 PM` was not present.
- Updated the refund FAQ to state that refund requests must be submitted by Thursday, May 21 at 11:59 PM and that this is a strict deadline.
- Updated `README.md` to document that the FAQ route includes refund deadline details.
- `npm test -- -g "FAQ page expands"` passed after implementation.
- `npm run build` passed with existing Webpack performance warnings for large assets.
