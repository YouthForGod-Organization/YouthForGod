# Task Plan: Update home and landing promo video

## Goal
Use the supplied `Y4G Eng Official v4.mp4` in both home components on the existing develop branch, optimized for web delivery.

## Existing Context
Reviewed AGENTS.md, README.md, CODESTYLE.md, docs/conference-2027.md, the prior artwork plan, package.json, tsconfig.json, webpack.config.js, playwright.config.ts, tests/pages.spec.ts, asset declarations, feature flags, routes, Landing.tsx/SCSS and HomePage.tsx/SCSS. No CI directory exists. `/` renders Landing; HomePage is an unused prototype. The current landing player offers the old 2026 MP4/WebM; HomePage uses an unrelated remote video. The supplied file is 57.33 seconds, 3840×2160 at 30 fps, H.264/AAC, approximately 172 MiB.

## Expected Behavior
Replace each existing promo source with the supplied video, without adding routes or changing feature flags. Preserve controls, responsive sizing and user-initiated playback; allow inline mobile playback and preload metadata only. Update obsolete promo labeling to the current conference. Keep the original download untouched and the old archived assets in place.

## Test Plan
Add a Playwright regression before implementation for the current promo label, single MP4 source, no autoplay, inline playback, metadata preload, loaded duration/dimensions and real playback progress. Confirm failure on the old page. Run the complete desktop/mobile suite with conference pages enabled and disabled, and a final production build. The unrouted prototype is checked by TypeScript compilation and source review rather than adding a public test route.

## Implementation Plan
1. Add and run the failing player regression.
2. Encode a 1080p H.264/yuv420p MP4 at CRF 23, retaining AAC audio and moving metadata to the start with faststart.
3. Point both existing players to the bundled asset, update labels and add inline/metadata attributes.
4. Verify encoded media, playback, responsive behavior and build output.

### Test environment adjustment
Bundled headless Chromium reports no H.264 or AAC support, while Mobile Safari plays the new MP4. Add an optional PLAYWRIGHT_CHROMIUM_CHANNEL override for installed Chrome; preserve the default test browser. Keep player configuration assertions in an unconditional test and skip only actual decoding when the browser reports missing codecs. Validate both flag states with installed Chrome and Mobile Safari.

## Documentation Plan
Update README.md and docs/conference-2027.md with current promo provenance, encoding guidance and validation. Record results here.

## Results
- Added `src/assets/y4g-2027-promo.mp4`: 20,818,997 bytes (19.9 MiB), about 88% smaller than the supplied export. FFprobe confirms 1920×1080/30 fps H.264 and AAC, 57.33 seconds. FFmpeg decoded the entire output without errors; MP4 atom inspection verified moov precedes mdat (faststart).
- Both players reference the new bundled asset and have controls, playsInline and metadata preloading. The old landing WebM source was removed to avoid playing a different year's video as fallback. The unused prototype now uses current hero artwork as its poster.
- Initial `npm test -- --grep 'home promo plays'` failed on both profiles for the missing current promo region, as intended before implementation. The first post-change Chromium playback attempt exposed the missing proprietary codecs; installed Chrome and Safari both subsequently passed actual playback.
- `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome YFG_SHOW_CONFERENCE_PAGES=true YFG_CAPTURE_SCREENSHOTS=true npm test`: 27 passed, 1 expected desktop/mobile-only skip. Reviewed desktop and mobile home screenshots.
- `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome YFG_SHOW_CONFERENCE_PAGES=false npm test`: 19 passed, 9 expected flag/mobile-only skips.
- `npm run build`: passed with webpack asset/entrypoint size warnings, including the MP4; no build errors. `git diff --check`: passed.
- Test preview required execution outside the sandbox after a port-binding denial. No development server was started. Changes remain local on develop; nothing was committed or deployed.
