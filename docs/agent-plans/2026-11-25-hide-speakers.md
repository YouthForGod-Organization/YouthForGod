# Task Plan: Temporarily hide Speakers

## Goal
Temporarily remove the Speakers page from the public site while preserving its implementation for later restoration.

## Existing Context
Reviewed AppRoutes.tsx, shared NavBar/Footer, featureFlags.ts, Speakers.tsx, route/navigation tests, README.md and docs/conference-2027.md. Build commands, project instructions and architecture were reviewed earlier in this session.

## Expected Behavior
Speakers links disappear from desktop/mobile navigation and footer. Direct visits to /speakers redirect to / through the existing fallback regardless of the conference flag. Other routes retain existing behavior. Speaker source, styles and data remain available for restoration.

## Test Plan
Replace the roster test with redirect and absence checks. Update navigation expectations to always omit Speakers and remove Speakers from visible-route checks. Confirm failures before code changes; then verify both conference flag states and build.

## Implementation Plan
1. Update route/navigation tests and run focused tests before implementation.
2. Remove Speakers route/import and shared navigation/footer links.
3. Verify routing in both flag states, alongside the ongoing carousel change.

## Documentation Plan
Update README route/flag guidance and conference documentation with temporary visibility and restoration instructions. Record verification results here.

## Validation Results
- Focused redirect/navigation tests failed before implementation, confirming the page and links were still visible.
- Full desktop/mobile suite with conference pages enabled: 34 passed, 2 skipped.
- `YFG_SHOW_CONFERENCE_PAGES=false npm test -- --grep 'speakers page is temporarily hidden|conference planning navigation|direct conference route'`: 6 passed.
- `npm run build` and `git diff --check` passed. Existing bundle/asset size warnings remain.
- Source files and portraits are retained; README documents restoration without changing environment settings.
