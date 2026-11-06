# Task Plan: Remove large blue page backgrounds

## Goal
Replace the large blue section at the top of each interior page with the requested cream background.

## Existing Context
Reviewed the shared page-hero mixin, blue background consumers and palette plan. All five interior page mastheads share this mixin.

## Expected Behavior
Schedule, speakers, media, FAQ and registration mastheads use #FFFBDD. Smaller blue accents and the supplied hero artwork remain unchanged.

## Test Plan
Use existing responsive desktop/mobile checks and the production preview build for this reversible color-only adjustment. No new CSS-specific tests needed.

## Implementation Plan
Change the shared masthead background token and update palette documentation, then run existing checks.

## Documentation Plan
Update README and record validation here.

## Results
- Replaced large blue mastheads with the #FFFBDD background across all five interior pages.
- Existing desktop/mobile responsive checks: 2 passed. Production build passed through the test preview command; `git diff --check` passed.
