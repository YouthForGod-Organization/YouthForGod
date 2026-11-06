# Task Plan: Cream navbar and selective dividers

## Goal
Remove schedule day-header backgrounds, move that cream treatment to the navbar, and restore restrained design lines.

## Existing Context
Reviewed navbar, schedule, speaker and FAQ styles, shared masthead mixin and recent border-removal guidance.

## Expected Behavior
Schedule day headings sit directly on white, aligned with the agenda. Navbar and mobile menu use #FFFBDD. Thin warm-gray dividers appear below navigation, below day headings, between schedule rows, between speaker rows and between FAQ entries. Other cards and controls remain borderless.

## Test Plan
Run existing desktop/mobile responsive and mobile-navigation coverage with all pages enabled. Use the production preview build; no new CSS-specific tests needed for this reversible visual adjustment.

## Implementation Plan
1. Update navbar and schedule surfaces.
2. Add selective 1px separators using the existing divider token.
3. Update README and validate.

## Documentation Plan
Update palette/design guidance and record checks here.

## Results
- Removed filled schedule day-header backgrounds and aligned their content with agenda rows.
- Applied #FFFBDD to navbar and mobile menu; added selective 1px warm-gray separators.
- Desktop/mobile layout and navigation checks: 3 passed, 1 intentionally skipped desktop mobile-menu case. Production build passed through the preview command; `git diff --check` passed.
