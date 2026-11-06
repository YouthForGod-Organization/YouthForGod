# Task Plan: Hero-inspired palette

## Goal
Use #FFFBDD throughout the website with supporting colors that complement the supplied hero artwork.

## Existing Context
Reviewed shared tokens/global styles, page hero mixin, all routed page and shared navigation/footer color declarations, current design documentation and existing responsive tests.

## Expected Behavior
Use #FFFBDD as the main canvas with the user-specified #878063 gray yellow, #736738 gray brown, #8396BA gray blue and #8A96A8 gray blue. Apply blue mastheads, brown buttons/footer, and gray-yellow support panels with contrasting text. Keep thin dividers, existing artwork, content, layouts and all enabled routes. External embedded registration content remains controlled by its provider.

## Test Plan
Use existing desktop/mobile responsive and navigation tests for this reversible style-only change. Check text/background contrast for new token pairings and review screenshots. Production build runs through the test preview command; no CSS-mirroring tests needed.

## Implementation Plan
1. Introduce semantic palette tokens and replace old gold/black/white token names.
2. Replace page-local hardcoded backgrounds and text colors with the shared palette.
3. Verify contrast, responsive tests and visual screenshots.

## Documentation Plan
Update README palette guidance and record validation here.

## Results
- Applied all five requested colors across shared tokens, routed page styles, navigation and footer. Updated remaining token consumers to the semantic names.
- Desktop/mobile responsive and menu tests: 3 passed, 1 intentionally skipped desktop mobile-menu case.
- Reviewed home, schedule and FAQ screenshots; retained images at `/tmp/yfg-palette-review`.
- Checked new small-text pairings against 4.5:1 contrast, darkening support-panel text to meet that threshold. Artwork and third-party form styling are unchanged.
- Final `YFG_SHOW_CONFERENCE_PAGES=true npm run build` passed with existing asset/bundle size warnings. `git diff --check` passed.
