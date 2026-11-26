# Task Plan: Remove conference page flag

## Goal
Remove the conference-page environment switch and always expose Schedule, FAQ and Register. Keep Speakers temporarily hidden.

## Existing Context
Reviewed README.md, AGENTS.md, CODESTYLE.md, docs/conference-2027.md, package.json, tsconfig.json, webpack.config.js, playwright.config.ts, netlify.toml, AppRoutes.tsx, NavBar.tsx, Footer.tsx, featureFlags.ts, tests/pages.spec.ts and the conference environment fixture. React Router registers pages; shared navigation and footer currently use a Webpack-defined flag. Playwright covers desktop Chrome and Mobile Safari against a production preview.

## Expected Behavior
Schedule, FAQ and Register appear in navigation and footer and support direct visits without environment configuration. Speakers still redirects home. Old flag values have no effect. Remove only this variable from local environment configuration; preserve unrelated settings.

## Test Plan
Update navigation, direct-route, footer and page tests to always expect conference pages. First run focused tests with the old flag set false to demonstrate the regression. After implementation run the full suite with installed Chrome, including the stale false value, and build with no flag.

## Implementation Plan
1. Update route/navigation tests and confirm failures before production changes.
2. Remove conditional links/routes, Webpack flag injection, the flag module and obsolete fixture; remove the local flag assignment.
3. Update current documentation and validate desktop/mobile behavior and production build.
4. Commit and push to the existing PR targeting develop.

## Documentation Plan
Update README.md and docs/conference-2027.md with unconditional page availability and ordinary test/build commands. Preserve historical plans as records of earlier behavior. Record validation results here.

## Validation Results
- Before implementation, focused navigation/direct-route tests with the flag false failed in all four desktop/mobile cases because Schedule was missing and direct visits redirected home.
- After implementation, `YFG_SHOW_CONFERENCE_PAGES=false PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm test`: 34 passed, 2 expected skips for mobile-only tests on desktop. This confirms stale hosting values cannot hide pages.
- `npm run build` without the flag passed with existing asset/bundle size warnings. `git diff --check` passed.
- Removed the flag assignment from the ignored local `.env`; no environment files or generated test artifacts are included in the commit. Remote hosting settings were not changed; a new deployment applies the code change.
