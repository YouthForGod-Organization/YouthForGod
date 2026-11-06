# Task Plan: Mobile hero artwork

## Goal
Use the supplied portrait artwork for the mobile home hero.

## Existing Context
Reviewed existing hero JSX/CSS, HTML preload, landing tests, README and current artwork documentation. The supplied image is 3375×6000 (9:16).

## Expected Behavior
Below 768px, display the full portrait image without cropping. At 768px and above, retain the landscape artwork. Preload only the applicable image. Preserve all page content and enabled routes.

## Test Plan
Extend existing landing coverage to assert the selected image and rendered aspect ratio at mobile and desktop sizes. Confirm mobile failure before implementation; then run desktop/mobile landing and responsive checks with the production preview build.

## Implementation Plan
1. Update the existing image test.
2. Create a 1080×1920 JPEG copy and add responsive picture sources/dimensions.
3. Match HTML preload media queries to picture selection.
4. Run checks and document the breakpoint/assets.

## Documentation Plan
Update README and conference content documentation; record validation here.

## Results
- Confirmed the mobile test failed before implementation because the landscape image was selected.
- Added the optimized 1080×1920 portrait JPEG (approximately 748 KB), responsive picture source and matching preloads. Original supplied image remains unchanged.
- Desktop/mobile image selection, aspect ratio, navigation and responsive checks: 6 passed.
- Production build passed through the Playwright preview command; `git diff --check` passed.
