# Task Plan: Subtle design borders

## Goal
Add a restrained layer of lines and borders to complement the existing palette.

## Existing Context
Reviewed media cards, landing sections/video/scripture, registration embed, footer and shared page masthead styles. Navigation, schedule, speaker and FAQ dividers already exist.

## Expected Behavior
Use thin warm-gray borders around media cards, promo video and registration form; add divider lines beneath page mastheads, above home information/scripture and above footer copyright. Preserve the white navbar, text-only hover, current backgrounds and natural speaker portraits.

## Test Plan
Run existing desktop/mobile responsive coverage and production preview build. No new CSS-mirroring tests for this reversible design-only change.

## Implementation Plan
Add scoped 1px declarations using the shared divider token; remove the iframe's browser-default border so the wrapper supplies a single frame. Document and validate.

## Documentation Plan
Update README design guidance and record results here.

## Results
- Added thin media/video/form frames and selective section/footer dividers; preserved current navbar styling.
- Desktop/mobile responsive checks: 2 passed. Production build passed through the preview command; `git diff --check` passed.
