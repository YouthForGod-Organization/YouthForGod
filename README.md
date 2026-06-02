# YouthForGod

Youth for God is a React single-page conference site for the 2026 "Solus Christus" event. The app currently ships the landing page and media archive by default, with schedule, speakers, FAQ, and registration pages held behind a conference-planning feature flag.

## Stack

- React 19 with TypeScript
- React Router for client-side routing
- Webpack for local development and production bundles
- Sass for page and component styling
- Playwright for end-to-end coverage on desktop and mobile viewports

## App Routes

- `/` renders the landing page, promo video, event summary, and media archive CTA.
- `/media` renders the 2026 sermon and music video archive.
- `/schedule` renders the conference schedule cards for Friday and Saturday when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/speakers` renders the featured speaker roster when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/faq` renders collapsible attendee guidance, refund deadline details, and support links when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/register` renders pricing details, refund deadline disclaimer, and the hosted registration iframe when `YFG_SHOW_CONFERENCE_PAGES=true`.
- When `YFG_SHOW_CONFERENCE_PAGES` is not enabled, `/schedule`, `/speakers`, `/faq`, and `/register` redirect to `/`.

## Conference Page Flag

The conference-planning pages are hidden by default because there is not an upcoming conference open for registration. To restore the schedule, speakers, FAQ, and registration routes for a future conference, set this environment variable at build time:

```bash
YFG_SHOW_CONFERENCE_PAGES=true npm run build
```

For local development, you can also add this to `.env`:

```bash
YFG_SHOW_CONFERENCE_PAGES=true
```

After changing `.env`, restart `npm start` or run a new build because webpack reads the flag when it starts. For hosting providers such as Netlify, set `YFG_SHOW_CONFERENCE_PAGES` to `true` in the site's environment variables and redeploy. Accepted true values are `true`, `1`, and `yes`.

## Project Layout

- `src/pages` contains route-level screens and their Sass files.
- `src/components` contains shared navigation, footer, and router helpers.
- `src/styles` contains global tokens, mixins, and shared base styles.
- `public` contains the HTML shell and static assets that must keep their public paths.
- `tests` contains Playwright coverage for the routed user experience.

## Local Development

```bash
npm install
npm start
```

The development server runs on port `3000`.

## Testing

```bash
npm test
```

Playwright starts a preview server on port `4173` and exercises the current routes in both desktop Chrome and Mobile Safari profiles.
