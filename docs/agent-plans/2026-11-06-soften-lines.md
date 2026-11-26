# Task Plan: Soften lines

## Goal
Reduce the visual weight of borders, dividers and underlines throughout the redesigned site.

## Existing Context
Reviewed README, CODESTYLE, the redesign plan, shared design tokens, all routed page border declarations, navigation/footer styling and existing Playwright setup and coverage.

## Expected Behavior
Use 1px neutral-gray dividers and borders instead of 2px black lines. Reduce gold accent rules from 4px to 2px and explicitly use 1px link underlines. Preserve readable focus outlines and all page content, functionality and enabled routes.

## Test Plan
This is a reversible styling adjustment; use existing desktop/mobile route and viewport coverage rather than tests mirroring CSS declarations. Run the production build and targeted responsive checks with all pages enabled.

## Implementation Plan
1. Lighten the shared divider color and reduce routed page/component border thickness.
2. Set media link underline thickness explicitly.
3. Run existing responsive tests and build.

## Documentation Plan
Update README visual-design description and record validation here.

## Results
- Updated shared divider color to #d5d3ce, routed borders to 1px, gold rules to 2px and media underlines to 1px.
- Existing responsive/navigation checks passed on desktop and mobile: 3 passed, 1 intentionally skipped desktop mobile-menu test.
- Production build passed through Playwright's `npm run preview:test` command, which runs `npm run build` before serving.
- `git diff --check` passed. All conference pages remain enabled; no environment settings changed.
