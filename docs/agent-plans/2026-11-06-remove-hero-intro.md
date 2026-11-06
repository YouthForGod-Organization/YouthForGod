# Task Plan: Remove hero introduction

## Goal
Remove the exact home introduction block requested by the user.

## Existing Context
Reviewed Landing.tsx, Landing.scss, existing landing tests, README and the hero artwork plan. The block owns the old theme heading, date text and View Media CTA.

## Expected Behavior
The home page begins with the Living as the Light artwork below the navigation. Remove the introductory copy and CTA. Media remains accessible through navigation and footer; other sections remain intact.

## Test Plan
Update existing landing expectations to require the introduction and CTA to be absent. Exercise the existing navigation link to media instead. Confirm failure before removal, then run desktop/mobile landing and responsive checks with all pages enabled.

## Implementation Plan
1. Update existing tests.
2. Remove the requested JSX, unused Link import and associated unused styles; align the hero region label with the artwork.
3. Run tests and production preview build.

## Documentation Plan
Update README home-page description and record checks here.

## Results
- Confirmed the updated landing test failed while the introduction was still present.
- Removed the requested block, unused import and styles. Updated the artwork region label and README.
- Desktop/mobile landing and responsive checks: 6 passed with all conference pages enabled.
- Production build passed through the Playwright preview command; `git diff --check` passed.
