# Task Plan: Remove decorative borders

## Goal
Remove decorative lines, borders and link underlines across the site.

## Existing Context
Reviewed all Sass border/underline declarations, shared page hero and navigation/footer styles, current white-background plan and existing responsive tests.

## Expected Behavior
Separate sections, cards, schedule rows and navigation through spacing and existing surfaces. Remove decorative outlines from controls, while retaining keyboard-only focus indicators and meaningful menu icons. Preserve content, artwork, palette and routes. Third-party form internals remain provider-controlled.

## Test Plan
Run existing desktop/mobile responsive and navigation coverage with all pages enabled. Production build runs through the preview command. No new CSS-mirroring tests for this reversible style change.

## Implementation Plan
Remove visible border declarations and hover border styling, remove media underlines, and retain filled backgrounds for interactive buttons. Update docs and validate.

## Documentation Plan
Update README design guidance and record results here.

## Results
- Removed decorative borders/dividers and media underlines across the site; retained keyboard focus outlines and menu icon strokes.
- Registration fallback and FAQ support links use filled cream surfaces.
- Desktop/mobile responsive and navigation checks: 3 passed, 1 intentionally skipped desktop mobile-menu case. Production build passed through the preview command.
- `git diff --check` passed; no solid border declarations or decorative underlines remain in app Sass.
