# Task Plan: Add Registration Refund Disclaimer

## Goal
Add a refund deadline disclaimer to the registration page so attendees see the refund cutoff before using the hosted registration form.

## Existing Context
- `README.md` was reviewed for route and testing documentation.
- `AGENTS.md` project instructions were followed for documentation-first, test-driven changes.
- `CODESTYLE.md` was reviewed previously; this task adds a small mobile-first style block.
- `package.json`, `playwright.config.ts`, `webpack.config.js`, and `tsconfig.json` were reviewed for commands and app setup.
- `src/pages/Registration/Registration.tsx` was reviewed for the registration page structure.
- `src/pages/Registration/Registration.scss` was reviewed for existing registration page styling.
- `tests/pages.spec.ts` was reviewed for existing registration route coverage.
- `docs/agent-plans/2026-05-19-update-refund-faq-deadline.md` was reviewed for the matching FAQ deadline wording.

## Expected Behavior
The `/register` page should display a refund deadline disclaimer before the embedded registration form. It should say refund requests must be submitted by this Thursday, May 21 at 11:59 PM and that the deadline is strict.

## Test Plan
- Update the existing registration Playwright test to assert the refund deadline disclaimer.
- Run the targeted registration test before production changes to confirm the disclaimer is missing.
- Run the targeted registration test after implementation.
- Run the production build after tests pass.

## Implementation Plan
1. Add failing Playwright assertions for the refund deadline disclaimer on `/register`.
2. Add the disclaimer copy to `src/pages/Registration/Registration.tsx` above the registration iframe.
3. Add scoped mobile-first styling in `src/pages/Registration/Registration.scss`.
4. Update `README.md` so the registration route documentation mentions the refund deadline disclaimer.
5. Run the relevant tests and build.

## Documentation Plan
- Update `README.md` for the `/register` route description.
- Keep this plan updated with the final test/build result.

## Results
- Added Playwright assertions for the registration refund deadline disclaimer.
- Confirmed the new assertions failed before the registration page change because the disclaimer was not present.
- Added the refund disclaimer above the embedded registration form.
- Added scoped mobile-first styling for the disclaimer.
- Updated `README.md` to mention the registration route's refund deadline disclaimer.
- `npm test -- -g "registration page shows"` passed after implementation.
- `npm test` passed with 14 tests.
- `npm run build` passed with existing Webpack performance warnings for large assets.

## Verbiage Update: Short Refund Deadline

## Goal
Shorten the registration page disclaimer to exactly: `Refund Deadline: Thursday, May 21 at 11:59 PM`.

## Existing Context
- `src/pages/Registration/Registration.tsx` currently renders the longer refund request sentence.
- `tests/pages.spec.ts` currently asserts the longer registration disclaimer and strict deadline language.
- The existing scoped disclaimer styles in `src/pages/Registration/Registration.scss` can remain unchanged.

## Expected Behavior
The `/register` page should display the shorter refund deadline text without the longer refund request sentence or separate strict deadline sentence.

## Test Plan
- Update the registration Playwright test to assert the new shorter text.
- Run the targeted registration test before production changes to confirm the old copy fails the new assertion.
- Update the registration page copy.
- Run the targeted registration test and production build after implementation.

## Implementation Plan
1. Update the registration route test to assert `Refund Deadline: Thursday, May 21 at 11:59 PM`.
2. Replace the registration disclaimer copy in `src/pages/Registration/Registration.tsx`.
3. Run the targeted test and build.

## Documentation Plan
- Record this verbiage update in this task plan.

## Results
- Updated the registration Playwright assertion for `Refund Deadline: Thursday, May 21 at 11:59 PM`.
- Confirmed the updated assertion failed before the copy change because the page still rendered the longer sentence.
- Shortened the registration disclaimer to `Refund Deadline: Thursday, May 21 at 11:59 PM`.
- `npm test -- -g "registration page shows"` passed after implementation.
- `npm run build` passed with existing Webpack performance warnings for large assets.

## Styling Update: Center Refund Deadline

## Goal
Center the registration page refund deadline text inside its disclaimer notice.

## Existing Context
- `src/pages/Registration/Registration.scss` defines the `registration__refund-disclaimer` notice styles.
- `tests/pages.spec.ts` covers the visible disclaimer text on `/register`.

## Expected Behavior
The `/register` refund deadline notice should remain visible and its text should be center-aligned.

## Test Plan
- Update the registration Playwright test to assert the refund deadline notice has `text-align: center`.
- Run the targeted registration test before the style change to confirm the assertion fails.
- Add the centered text style.
- Run the targeted registration test and production build after implementation.

## Implementation Plan
1. Add the CSS alignment assertion to the registration route test.
2. Add `text-align: center` to `registration__refund-disclaimer`.
3. Run the targeted test and build.

## Documentation Plan
- Record this styling update in this task plan.

## Results
- Added a Playwright CSS assertion for `text-align: center` on the registration refund deadline notice.
- Confirmed the assertion failed before the style change because the computed alignment was `start`.
- Added `text-align: center` to `registration__refund-disclaimer`.
- `npm test -- -g "registration page shows"` passed after implementation.
- `npm run build` passed with existing Webpack performance warnings for large assets.
