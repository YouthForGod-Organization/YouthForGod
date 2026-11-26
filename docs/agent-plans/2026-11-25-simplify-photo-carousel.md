# Task Plan: Simplify photo carousel

## Goal
Remove the final screenshot and the heading/pause row, and make the gallery full width with black surrounding space.

## Existing Context
Reviewed AGENTS.md, README.md, CODESTYLE.md, docs/conference-2027.md, the original carousel plan, package.json, tsconfig.json, webpack.config.js, playwright.config.ts, Landing.tsx/SCSS, PhotoCarousel.tsx/SCSS, conferencePhotos.ts, routing and tests/pages.spec.ts.

## Expected Behavior
Seven conference photos remain, ending with the worship leader. The eyebrow, heading and play/pause row disappear. The viewer spans the viewport with black letterboxing and surrounding space; images remain uncropped. Previous/next, swipe, keyboard navigation and the counter remain. Existing automatic advancement and its hover/focus/manual-interaction stops remain; there is no restart control.

## Test Plan
Update carousel checks for seven images, removed text/control, edge-to-edge width and black backgrounds on desktop and mobile. Verify navigation/wrapping, automatic advancement stopping after manual navigation, reduced motion and viewport overflow. Run the updated tests before implementation to confirm failure, then run the suite and production build.

## Implementation Plan
1. Update carousel behavior tests and confirm expected failures.
2. Remove the final data entry/import and heading/control markup.
3. Remove the width-constrained wrapper and style the viewer/navigation against black.
4. Run checks and inspect desktop/mobile gallery screenshots.

## Documentation Plan
Update README.md and docs/conference-2027.md with the seven-photo content, full-width presentation and remaining controls. Retain the unused source asset without importing it.

## Validation Results
- Updated tests failed against the old heading and play/pause row before implementation.
- `npm test`: 34 passed, 2 skipped (desktop MP4 codec coverage and mobile-only navigation on desktop).
- `YFG_CAPTURE_SCREENSHOTS=true npm test -- --grep 'Conference photo carousel'`: 6 passed after switching optional capture to viewport screenshots; resizing for larger captures reset Chromium scroll snapping. Inspected desktop/mobile landscape and portrait captures.
- `npm run build`: passed with existing asset/entrypoint size warnings; seven gallery WebP assets are bundled.
- `git diff --check`: passed.
