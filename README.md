# YouthForGod

Youth for God is a React single-page conference site for the 2026 "Solus Christus" event. The app ships a landing page, schedule, speakers, FAQ, and registration flow with a mobile-first presentation.

## Stack

- React 19 with TypeScript
- React Router for client-side routing
- Webpack for local development and production bundles
- Sass for page and component styling
- Playwright for end-to-end coverage on desktop and mobile viewports

## App Routes

- `/` renders the landing page, promo video, and event summary.
- `/schedule` renders the conference schedule cards for Friday and Saturday.
- `/speakers` renders the featured speaker roster.
- `/faq` renders collapsible attendee guidance, refund deadline details, and support links.
- `/register` renders pricing details, refund deadline disclaimer, and the hosted registration iframe.

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
