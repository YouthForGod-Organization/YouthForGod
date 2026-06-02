# Task Plan: Update Home Media CTA

## Goal
Update the main landing page so the primary hero button sends visitors to the media archive instead of registration.

## Existing Context
- `README.md` was reviewed for route documentation and current site purpose.
- `AGENTS.md` was reviewed for the required documentation-first, test-driven workflow and the local server rule.
- `package.json` was reviewed for existing test and build commands.
- `src/pages/Landing.tsx` was reviewed for the active home route hero CTA.
- `src/pages/Home/HomePage.tsx` and `src/pages/Home/HomePage.scss` were reviewed and confirmed to be an unused legacy homepage prototype.
- `tests/pages.spec.ts` was reviewed for existing landing CTA coverage.
- The `/media` route and navigation updates from `docs/agent-plans/2026-05-28-create-media-page.md` were reviewed as related context.

## Expected Behavior
The home page hero should show a button that directs visitors to `/media` to view conference media. The hero should no longer show the `Register Now` primary CTA.

## Test Plan
- Update the landing page test to assert a media CTA is visible and the `Register Now` hero CTA is absent.
- Update the landing CTA routing test so clicking the media CTA navigates to `/media`.
- Run the targeted landing tests before production changes to confirm the new assertions fail.
- Run the targeted landing tests after implementation.
- Run the production build after tests pass.

## Implementation Plan
1. Update Playwright assertions for the new media CTA behavior.
2. Change the hero button in `src/pages/Landing.tsx` from `/register` to `/media` with media-focused label text.
3. Update `README.md` if needed to mention the landing page now promotes the media archive.
4. Run targeted tests and build.

## Documentation Plan
- Add this task plan under `docs/agent-plans/`.
- Update `README.md` route summary if the landing page description needs the media archive reflected.

## Results
- Updated Playwright landing assertions to expect a `View Media` hero CTA, no `Register Now` hero CTA, and navigation to `/media`.
- Confirmed the targeted landing tests failed before the source change because the hero still rendered `Register Now`.
- Updated `src/pages/Landing.tsx` so the hero button reads `View Media` and links to `/media`.
- Updated `README.md` to note that `/` includes a media archive CTA.
- `npm test -- -g "landing page"` passed after implementation.
- `npm test` passed with 16 tests.
- `npm run build` passed with existing Webpack performance warnings for large assets.
