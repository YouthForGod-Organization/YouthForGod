# Task Plan: Conference pages feature flag

## Goal
Temporarily hide the registration, schedule, FAQ, and speakers pages while there is no upcoming conference, and make them easy to restore with an environment variable when a new conference is planned.

## Existing Context
- Reviewed `README.md` for stack, routes, local development, and testing commands.
- Reviewed `AGENTS.md` and `CODESTYLE.md` for required planning, TDD, documentation, and local server rules.
- Reviewed `package.json`, `tsconfig.json`, `webpack.config.js`, and `playwright.config.ts` for build-time environment handling and test commands.
- Reviewed `src/routes/AppRoutes.tsx` for route registration.
- Reviewed `src/components/common/NavBar.tsx` and `src/components/common/Footer.tsx` for shared route links.
- Reviewed `tests/pages.spec.ts` for current route-level Playwright coverage.

## Expected Behavior
- By default, the site hides conference-planning pages because no new conference is currently planned.
- `/register`, `/schedule`, `/faq`, and `/speakers` are not linked from shared navigation or footer when the feature flag is off.
- Direct visits to `/register`, `/schedule`, `/faq`, and `/speakers` redirect to the home page when the feature flag is off.
- Setting `YFG_SHOW_CONFERENCE_PAGES=true` at build time restores the conference-planning routes and shared links.
- Setting `YFG_SHOW_CONFERENCE_PAGES=true` in a local `.env` file also restores the conference-planning routes after restarting the dev server or rebuilding.
- The media archive remains visible in both modes.

## Test Plan
- Update Playwright coverage to verify default hidden-page behavior.
- Assert shared navigation and footer omit Register, Schedule, FAQ, and Speakers when the flag is off.
- Assert direct visits to hidden routes redirect to the home page.
- Add conditional Playwright coverage so the same tests verify links and direct routes are available when `YFG_SHOW_CONFERENCE_PAGES=true`.
- Run the enabled-mode tests with the flag provided through the environment.
- Keep coverage for the home page and media archive.

## Implementation Plan
1. Add a webpack `DefinePlugin` build-time constant from `YFG_SHOW_CONFERENCE_PAGES`.
2. Add a small typed feature flag module for the app to consume.
3. Use the flag in routes, navigation, and footer quick links.
4. Add a catch-all redirect so disabled or unknown routes land on home.
5. Load `.env` values in `webpack.config.js` before computing the feature flag.
6. Update route documentation for the flag, hidden default state, and restart/rebuild requirement.

## Documentation Plan
- Update `README.md` with the conference page feature flag and how to re-enable the hidden pages.
- Keep this task plan as the implementation record.
