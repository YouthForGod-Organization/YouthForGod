# Task Plan: White navbar with text-only hover

## Goal
Use a white navbar and change navigation text color without changing backgrounds on hover.

## Existing Context
Reviewed NavBar.scss, existing palette and the previous navbar/divider plan. Page links share hover/active styling; Register has separate CTA styling.

## Expected Behavior
Navbar/mobile menu are white. Page links use brown text on hover, focus and active states with no background fill. Register retains its existing brown fill without a hover background change. Preserve the divider and mobile menu behavior.

## Test Plan
Run existing responsive and mobile-navigation checks, including the production preview build. No new CSS-mirroring tests for this reversible styling change.

## Implementation Plan
Update background and state rules, document the behavior, then validate.

## Documentation Plan
Update README palette/navigation description and record checks here.

## Results
- Navbar/mobile menu use white. Page-link hover, focus and active states only change text color; Register's background remains fixed.
- Desktop/mobile layout and menu checks: 3 passed, 1 intentionally skipped desktop mobile-menu case. Production build passed through the preview command; `git diff --check` passed.
