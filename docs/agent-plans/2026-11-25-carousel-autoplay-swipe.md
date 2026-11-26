# Task Plan: Photo-only autoplay and swipe carousel

## Goal
Remove previous/next buttons and the counter, leaving automatically switching photos that visitors can swipe.

## Existing Context
Reviewed the current PhotoCarousel component/styles, gallery tests, README and previous carousel plan. Project instructions, style guidelines, conference documentation, routing and build/test configuration were reviewed earlier in this session.

## Expected Behavior
The seven-photo, full-width black gallery has the title “Past Conference moments” (latest user request), without a counter or controls. Style the title white on black above the viewer, preserving the requested capitalization. Per the latest user instruction, photos advance continuously every five seconds without hover, focus, pointer or visibility pauses. Native horizontal touch/trackpad scrolling remains available; changing the slide starts the next five-second interval. Reduced-motion preferences use instant transitions while automatic switching continues. Arrow-key navigation and descriptive image/slide labels remain.

## Test Plan
First update desktop/mobile tests to assert no controls/counter, loaded images, keyboard wrapping and horizontal scrolling. Verify automatic advancement, continued switching during hover/focus and after touch browsing, including reduced motion using actual scroll positions. Run the failing checks before implementation, then the full suite and production build; capture desktop/mobile views.

## Implementation Plan
1. Update tests and confirm failures for visible controls and permanently stopped autoplay.
2. Remove navigation markup/styles and remove playback stops and keep a continuous timer.
3. Validate behavior, screenshots and build.

## Documentation Plan
Update README.md and docs/conference-2027.md to describe the photo-only gallery, swipe navigation and resumed autoplay; record validation here.

## Validation Results
- Confirmed failing assertions before each behavior change: controls present, autoplay stopped on hover/focus/reduced motion, and requested title absent.
- Final `YFG_CAPTURE_SCREENSHOTS=true npm test`: 34 passed, 2 skipped (desktop codec availability and mobile-only menu test on desktop). Checks cover continuous autoplay during hover/focus, switching after touch browsing, keyboard wrapping, horizontal scroll, reduced-motion instant switching, seven photos and the new title. Inspected desktop/mobile captures.
- Keyboard navigation now reads the current scroll position to avoid stale state during quick successive key presses. Timer tests install the mock clock before app timers or use real-time polling.
- `npm run build` and `git diff --check` passed; existing bundle/asset size warnings remain.
