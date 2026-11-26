# Task Plan: Mockup redesign

## Goal
Apply the supplied Y4G Site UI Mockup visual direction to the existing website without changing its information or functionality.

## Existing Context
Reviewed README.md, AGENTS.md, CODESTYLE.md, package.json, TypeScript/Webpack/Playwright configuration, shared styles, navigation/footer, routed page components and Sass, tests/pages.spec.ts, and both supplied HTML mockups.

## Expected Behavior
Use v2's bold Montserrat headings, cream surfaces, gold accents, square controls, divider lines and editorial speaker rows. Preserve Solus Christus (the v2 Children of Light title is treated as placeholder copy), all logos, original hero artwork, promo video, full footer information, route flags, FAQ answers, schedule, media links and registration integration. Keep existing section ordering and both schedule days visible. Work locally in this repository; no publishing or development server.

## Test Plan
Update hero coverage for a real accessible theme heading and static CTA. Add responsive overflow, mobile navigation and branding preservation checks. Confirm new heading test fails before edits. Run Playwright with conference pages enabled and production build. The user confirmed all pages are currently shown; preserve that setting. Capture desktop/mobile screenshots through the test runner for visual review.

## Implementation Plan
1. Record plan and add regression coverage.
2. Update shared design tokens and reusable inner-page hero styles.
3. Restyle existing page/component Sass and add a typographic home introduction while retaining artwork and sections.
4. Validate behavior and responsive screenshots, fix observed issues.

## Documentation Plan
Document design source, preserved behavior, shared style ownership and verification in README and this plan.

## Results
- Confirmed the new heading test failed before implementation because no accessible Solus Christus heading existed.
- Applied the reference styling to all six routes, shared navigation and footer; retained original logos, artwork, content and integrations.
- `YFG_SHOW_CONFERENCE_PAGES=true YFG_CAPTURE_SCREENSHOTS=true npm test -- --workers=2`: 23 passed, 1 intentionally skipped (mobile-menu test on desktop).
- Reviewed desktop/mobile screenshots for home, speakers, media, FAQ, schedule and registration. Captures are retained outside the source tree at `/tmp/yfg-redesign-review`.
- External YouTube thumbnails and the Subsplash form were not rendered in the screenshots; their URLs and integration markup remain unchanged. External checkout completion was not tested.
- The disabled-pages test was interrupted before execution. Final validation and build preserve all pages enabled, as clarified by the user. No environment files or deployment settings were modified.
- `YFG_SHOW_CONFERENCE_PAGES=true npm run build`: passed with asset/entrypoint size warnings for the existing media assets and application bundle.
- `git diff --check`: passed.
