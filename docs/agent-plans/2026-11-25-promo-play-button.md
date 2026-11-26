# Task Plan: Replace promo branding with a play button

## Goal
Remove the logo and conference title displayed over the landing video before playback and replace them with a centered play button.

## Existing Context
Reviewed Landing.tsx, Landing.scss, the promo tests, package.json, playwright.config.ts, CODESTYLE.md, README promo instructions, conference documentation and the previous promo plan. Earlier repository architecture and AGENTS.md review still applies. The branding is a separate overlay inside the live landing player, not part of the video. Prior uncommitted video changes are retained.

## Expected Behavior
The player initially shows a black background and an accessible circular play button. Clicking or keyboard-activating it starts the video and removes the button. Native controls remain available. Playback failure provides a visible message and leaves controls available. The large hero above the video is unchanged.

## Test Plan
Update the promo configuration test to require the button and no logo/title; update playback coverage to use real button activation (keyboard on desktop, tap on mobile). Confirm failure before implementation. Cover rejected playback, then run focused desktop Chrome/mobile Safari checks and the production build.

## Implementation Plan
1. Update and run failing tests.
2. Replace the branding overlay with a button tied to the video ref and remove obsolete overlay styling.
3. Style a responsive circular control with a clear keyboard focus indicator; handle play rejection visibly.
4. Validate playback and layout using the production test preview.

## Documentation Plan
Update the README and conference documentation to describe the new initial player state; record test/build results here.

## Results
The initial configuration regression failed on desktop and mobile for the missing play button. Implemented the circular control, keyboard focus, actual playback activation and visible rejection message. `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome YFG_CAPTURE_SCREENSHOTS=true npm test -- --grep 'home promo|landing page opens|redesigned pages'`: 10 passed, including desktop Enter activation and mobile tap playback. Desktop/mobile screenshots reviewed. `npm run build` passed with existing webpack size warnings. The test preview required execution outside the sandbox for port binding.
