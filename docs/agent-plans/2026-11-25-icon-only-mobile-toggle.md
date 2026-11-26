# Task Plan: Simplify mobile navigation toggle

## Goal
Show only the hamburger icon, without visible Menu/Close text, a colored background or a button border.

## Existing Context
Reviewed NavBar.tsx/SCSS, mobile navigation tests, README and the mobile navigation plan. Project guidelines and build/test setup were reviewed earlier in this session.

## Expected Behavior
Use a transparent, borderless 48px icon button. Per the latest request, open navigation in a full-viewport native modal dialog covering the page and navbar. Provide an icon-only close control, large centered links, Escape dismissal, focus containment/restoration and background scroll locking. Keep desktop navigation unchanged and close the mobile dialog when switching to desktop. Native modal behavior replaces the previous outside-tap dropdown dismissal.

## Test Plan
Update existing mobile assertions to require no visible text, transparent background and no border. Confirm failure before styling changes, then add fullscreen geometry and modal interaction checks before replacing the dropdown. Run navigation/layout checks and production build.

## Implementation Plan
1. Update existing assertions and confirm failure.
2. Remove label markup/styles and simplify the toggle styling.
3. Validate, commit and push to the existing PR branch.

## Documentation Plan
Update README navigation guidance and record validation here; revise PR description to match the final toggle.

## Validation Results
- Updated tests failed first on the old Menu label, then on the absent full-screen dialog.
- `YFG_CAPTURE_SCREENSHOTS=true PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm test`: 34 passed, 2 expected mobile-only skips on desktop. Includes full-viewport bounds, icon-only transparent trigger, link selection, close/Escape, focus restoration, scroll locking, gallery and promo playback.
- Reviewed the mobile full-screen menu screenshot.
- `npm run build` and `git diff --check`: passed; existing bundle/asset size warnings remain.
