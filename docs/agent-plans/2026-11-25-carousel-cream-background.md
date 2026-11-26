# Task Plan: Match gallery background to event information

## Goal
Use the same cream background as the section above the gallery.

## Existing Context
Reviewed PhotoCarousel.scss, Landing.scss, shared color tokens, gallery tests, README, conference docs and previous carousel plan. Project instructions, configuration and commands were reviewed earlier in this session.

## Expected Behavior
The gallery section and photo letterboxing use --color-cream, matching #info. The title and keyboard focus indicator use the existing dark ink color for contrast. Full-width layout, photos, continuous autoplay and swipe navigation remain unchanged.

## Test Plan
Update existing desktop/mobile gallery assertions to compare backgrounds and title colors with the section above; confirm failure before changing styles. Run carousel tests and production build.

## Implementation Plan
1. Update existing color assertions.
2. Change gallery, viewer, title and focus colors to shared tokens.
3. Verify desktop/mobile gallery tests and build.

## Documentation Plan
Update README.md and docs/conference-2027.md to describe cream backgrounds and dark title styling; record validation here.

## Validation Results
- Updated color assertions failed against the previous white title before implementation.
- `npm test -- --grep 'Conference photo carousel'`: all 6 desktop/mobile checks passed, including matching backgrounds, title contrast, navigation and continuous autoplay.
- Playwright's production preview build and `git diff --check` passed.
