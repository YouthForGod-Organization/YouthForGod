# Task Plan: Six-photo conference grid

## Goal
Replace the carousel with six equally sized pictures in two columns and three rows.

## Existing Context
Reviewed the current PhotoCarousel component/styles, conferencePhotos.ts, Landing integration, gallery tests, README and conference documentation. Project instructions, style rules, architecture and build/test commands were reviewed earlier in this session.

## Expected Behavior
Show the first six existing conference photos in order, omitting the final worship-leader photo. Retain “Past Conference moments,” the cream background and full-width section. Use two equal columns on desktop and mobile, three rows, consistent gaps and identical 4:3 tiles with object-fit: cover. All six photos appear in the page; the static grid replaces autoplay/swipe behavior. Keep descriptive alt text and lazy loading; retain unused source assets.

## Test Plan
Replace carousel-specific tests with desktop/mobile checks for six loaded photos, equal dimensions, two-column/three-row geometry, consistent section/title colors, footer placement and no viewport overflow. Verify failure before implementation. Capture and inspect desktop/mobile screenshots and run the production build.

## Implementation Plan
1. Write the grid regression test and confirm the old carousel fails.
2. Rename PhotoCarousel to PhotoGallery and simplify it to static images; update Landing import/usage.
3. Replace scrolling styles with a two-column grid, and remove the seventh photo import/data entry.
4. Run gallery/layout checks and build; inspect screenshots.

## Documentation Plan
Update README.md and docs/conference-2027.md for six-photo selection, grid dimensions/cropping and component names. Record verification here.

## User-friendly design refinement
The user additionally requested a polished, easy-to-use design. Add consistent page gutters and spacing using the existing container, keep square tiles consistent with the site, and provide a short “Select a photo to view it in full.” hint with small expand icons. Each tile opens an accessible native dialog showing the full uncropped image and its description. Provide a large Close control, Escape/backdrop dismissal, modal focus containment, focus restoration and background scroll locking. Retain two columns on mobile and six equally sized tiles. Adjust the attendees crop upward to retain faces. Add interaction tests before implementation for keyboard/touch opening, uncropped viewing, closing, focus restoration and responsive modal fit.

## Validation Results
- Initial grid test failed against the old carousel; viewer tests failed before interactive tiles were added.
- `YFG_CAPTURE_SCREENSHOTS=true npm test -- --grep 'Conference photo gallery|redesigned pages'`: 6 passed on Desktop Chrome and Mobile Safari, covering layout, loaded photos, keyboard/touch opening, close/Escape, focus restoration, background scroll lock and viewport fit.
- Inspected desktop/mobile gallery captures and the mobile full-photo viewer; six equal 4:3 tiles retain subjects with consistent spacing and responsive margins.
- `npm run build`: passed with existing asset and entrypoint size warnings.
- `git diff --check`: passed.
- Final pre-PR `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm test`: 33 passed, 1 expected skip (mobile-only navigation on desktop), including real promo playback on Chrome and Mobile Safari. The production preview rebuilt successfully. Branch prepared from current origin/develop.
