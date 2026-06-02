# Task Plan: Animate Home Media CTA

## Goal
Add a subtle jumping animation to the home page `View Media` button so it draws attention without changing the route or layout.

## Existing Context
- `AGENTS.md` was reviewed for documentation-first, test-driven workflow and the local server rule.
- `README.md` was reviewed for the landing route and media archive context.
- `CODESTYLE.md` was reviewed for mobile-first styling expectations.
- `package.json` was reviewed for existing test and build commands.
- `src/pages/Landing.tsx` was reviewed for the active home hero CTA.
- `src/pages/Landing.scss` was reviewed for existing button, hover, and hero styles.
- `tests/pages.spec.ts` was reviewed for current landing CTA coverage.

## Expected Behavior
The home page `View Media` button should keep routing to `/media` and should have a subtle looping jump animation. Users who prefer reduced motion should not receive the looping animation.

## Test Plan
- Update the landing Playwright test to assert that the hero media CTA has the expected animation name.
- Run the targeted landing test before production changes to confirm the animation is missing.
- Run the targeted landing test after implementation.
- Run the production build after tests pass.

## Implementation Plan
1. Add a failing Playwright CSS assertion for the CTA animation.
2. Add a scoped keyframe animation to `src/pages/Landing.scss`.
3. Add a `prefers-reduced-motion: reduce` guard to disable the animation.
4. Run targeted tests and build.

## Documentation Plan
- Add this task plan under `docs/agent-plans/`.

## Results
- Added a Playwright CSS assertion for `animation-name: yfg-media-cta-jump` on the home page media CTA.
- Confirmed the targeted landing test failed before the style change because the animation name was `none`.
- Added a scoped looping jump animation to `.yfg-hero__cta .yfg-btn--primary`.
- Added a `prefers-reduced-motion: reduce` guard to disable the looping animation for reduced-motion users.
- `npm test -- -g "landing page shows"` passed after implementation.
- `npm test` passed with 16 tests.
- `npm run build` passed with existing Webpack performance warnings for large assets.
