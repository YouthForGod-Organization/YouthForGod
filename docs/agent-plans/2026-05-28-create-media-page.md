# Task Plan: Create Media Page

## Goal
Create a mobile-friendly `/media` page for Youth for God Conference 2026 videos, separated into sermons and music videos, using the latest seven YouTube uploads from the Bible Baptist Church channel.

## Existing Context
- `README.md` was reviewed for route, layout, and testing documentation.
- `AGENTS.md` was reviewed for the documentation-first and test-driven workflow.
- `CODESTYLE.md` was reviewed for mobile-first styling expectations.
- `package.json` was reviewed for existing test and build commands.
- `tsconfig.json`, `webpack.config.js`, and `playwright.config.ts` were reviewed for app and test setup.
- `src/routes/AppRoutes.tsx` was reviewed for the existing route map.
- `src/components/common/NavBar.tsx` and `src/components/common/Footer.tsx` were reviewed for shared navigation links.
- `src/pages/Speakers/Speakers.tsx`, `src/pages/Speakers/Speakers.scss`, `src/pages/Schedule/Schedule.tsx`, and `src/pages/Schedule/Schedule.scss` were reviewed for route page structure and visual patterns.
- `tests/pages.spec.ts` was reviewed for routed Playwright coverage.
- YouTube channel feed `UCxv6lC-lUM1evS7CgTX9kFg` was reviewed for the latest Youth for God 2026 uploads.

## Expected Behavior
The site should have a `/media` route with a conference media hero, a Sermons section containing the two latest sermon videos, and a Music Videos section containing the next five music videos. Each video should render as a responsive card with a YouTube thumbnail, title, metadata, and a link to watch on YouTube. The header and footer should include a Media link.

## Test Plan
- Add Playwright coverage for the `/media` route, the section headings, the latest sermon/music titles, and representative YouTube links.
- Add Playwright coverage that the shared footer exposes the Media quick link.
- Run the targeted media test before production changes to confirm the route is missing.
- Run the targeted media test after implementation.
- Run the full Playwright suite and production build after implementation.

## Implementation Plan
1. Add failing Playwright assertions for the media page and footer Media link.
2. Create `src/pages/Media/Media.tsx` with data-driven sermon and music video sections.
3. Create `src/pages/Media/Media.scss` using the existing hero/card visual language and mobile-first responsive layout.
4. Add the `/media` route to `src/routes/AppRoutes.tsx`.
5. Add Media links to the header and footer navigation.
6. Update `README.md` to document the new route.
7. Run targeted tests, full tests, and build.

## Documentation Plan
- Update `README.md` to include the `/media` route.
- Keep this task plan updated with validation results.

## Results
- Added Playwright coverage for the `/media` route, separate Sermons and Music Videos sections, representative YouTube links, and the footer Media link.
- Confirmed the targeted media test failed before implementation because the `/media` route did not render the new page.
- Created `src/pages/Media/Media.tsx` with two sermon cards and five music video cards from the Bible Baptist Church YouTube feed.
- Created `src/pages/Media/Media.scss` with mobile-first responsive video cards and styling aligned with existing route pages.
- Added the `/media` route to `src/routes/AppRoutes.tsx`.
- Added Media links to the shared header and footer navigation.
- Updated `README.md` to document the media archive route.
- Left `public/_redirects` unchanged because the existing catch-all route already serves `/media`.
- `npm test -- -g "media page separates"` passed after implementation.
- `npm test` passed with 16 tests.
- `npm run build` passed with existing Webpack performance warnings for large assets.

## Refresh: Add Three New Music Videos

## Goal
Add the three newest music videos from the Bible Baptist Church YouTube channel to the `/media` page.

## Existing Context
- `src/pages/Media/Media.tsx` currently renders two sermons and five music videos.
- `tests/pages.spec.ts` currently verifies representative sermon and music cards.
- The YouTube channel page was refreshed on May 28, 2026 and showed three newer music video IDs before the existing sermon uploads: `FtxesjxIH8g`, `lKL5ExQV53s`, and `ZHEvi9W7sww`.
- YouTube oEmbed metadata was used to confirm the new video titles.

## Expected Behavior
The Music Videos section should include the three newest music videos before the existing music video cards:
- `Jesus - There's Just Something About That Name`
- `Ты вошел в жизнь мою`
- `Господи, услыши`

## Test Plan
- Update the media Playwright test to assert the new music titles and a representative new YouTube link.
- Run the targeted media test before production changes to confirm the new videos are missing.
- Add the new music video records.
- Run the targeted media test and production build after implementation.

## Implementation Plan
1. Add failing Playwright assertions for the new music cards.
2. Add the three new music video records to `musicVideos` in `src/pages/Media/Media.tsx`.
3. Run the targeted media test and build.

## Documentation Plan
- Record this media refresh in this task plan.

## Results
- Added Playwright assertions for the three newest music videos and a representative new YouTube link.
- Confirmed the targeted media test failed before the data update because the new music cards were missing.
- Added `FtxesjxIH8g`, `lKL5ExQV53s`, and `ZHEvi9W7sww` to the top of the Music Videos list.
- `npm test -- -g "media page separates"` passed after implementation.
- `npm run build` passed with existing Webpack performance warnings for large assets.
- `npm test` passed with 16 tests.
