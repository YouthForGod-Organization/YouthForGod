# Task Plan: Add Saturday Registration Schedule

## Goal
Add a Saturday schedule entry showing that registration is also available at 8:00 AM.

## Existing Context
- `README.md` was reviewed for route and testing documentation.
- `AGENTS.md` was reviewed for the documentation-first and test-driven workflow.
- `CODESTYLE.md` was reviewed; this task does not require styling changes.
- `package.json` was reviewed for existing test and build commands.
- `tsconfig.json`, `webpack.config.js`, and `playwright.config.ts` were reviewed for app and test setup.
- `src/pages/Schedule/Schedule.tsx` was reviewed for the existing Friday and Saturday schedule data.
- `src/pages/Schedule/Schedule.scss` was reviewed to confirm no styling change is needed.
- `tests/pages.spec.ts` was reviewed for existing schedule route coverage.
- Existing schedule-related task plans in `docs/agent-plans/` were reviewed for prior schedule updates.

## Expected Behavior
The Saturday schedule card should show `Registration` at `8:00 AM` in addition to the existing Saturday coffee cart and session entries.

## Test Plan
- Update the schedule Playwright test to assert that the Saturday card includes `8:00 AM` and `Registration`.
- Run the targeted schedule test before production changes to confirm the new assertion fails.
- Run the targeted schedule test after implementation.
- Run the production build after tests pass.

## Implementation Plan
1. Add failing Playwright assertions for Saturday `8:00 AM` registration.
2. Add the Saturday registration slot to `src/pages/Schedule/Schedule.tsx`.
3. Run the targeted schedule test and production build.

## Documentation Plan
- Add this task plan under `docs/agent-plans/`.
- No README update is needed because the schedule route behavior is already described at a high level.

## Results
- Added Playwright assertions for Saturday `8:00 AM` registration.
- Confirmed the updated schedule test failed before the source change because Saturday did not include `8:00 AM`.
- Added the Saturday `Registration` slot at `8:00 AM`.
- `npm test -- -g "schedule page lists"` passed after implementation.
- `npm run build` passed with existing Webpack performance warnings for large assets.
