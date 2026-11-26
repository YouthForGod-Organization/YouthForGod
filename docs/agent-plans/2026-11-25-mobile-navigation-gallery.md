# Task Plan: Refine mobile menu and stack gallery photos

## Goal
Improve the hamburger menu design and show gallery photos in one column on phones. Include these follow-up changes in the requested PR targeting develop.

## Existing Context
Reviewed NavBar.tsx/SCSS, PhotoGallery.scss, existing mobile navigation and gallery tests, CODESTYLE.md, README and conference documentation. Project setup and commands were reviewed earlier in this session.

## Expected Behavior
Below 768px, gallery photos stack in one column; at 768px and above they retain two columns and equal 4:3 tiles. Below the existing 1024px navigation breakpoint, use a clearly labeled Menu/Close toggle with a tidy hamburger-to-close icon, generous touch targets, and an inset menu panel with visible active state. Close on link selection, Escape or an outside tap; Escape returns focus to the toggle. Reset open state when entering desktop layout. Desktop links and conference flags retain their behavior.

## Test Plan
Update gallery geometry checks for responsive columns. Add mobile menu checks for labels, controlled navigation, touch target size, panel bounds, Escape/focus and outside dismissal. Run failing tests first, then desktop/mobile checks and screenshots. Verify the production build before the follow-up commit and push.

## Implementation Plan
1. Update tests and confirm failures.
2. Add mobile-first gallery breakpoint and menu styling/interaction changes.
3. Validate, document, commit and push the follow-up changes on the same feature branch.

## Documentation Plan
Update README.md, docs/conference-2027.md and this plan with responsive behavior and validation.

## Validation Results
- New checks failed against the old mobile two-column grid and unlabeled toggle before implementation.
- `YFG_CAPTURE_SCREENSHOTS=true PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm test`: 34 passed, 2 expected skips for mobile-only tests on desktop. Includes actual video playback, photo viewing, mobile one-column geometry, desktop two-column geometry, menu navigation, Escape/focus and outside dismissal.
- Reviewed the mobile menu capture and verified grid geometry on both browser profiles.
- `npm run build` and `git diff --check`: passed. Existing asset/bundle size warnings remain.
