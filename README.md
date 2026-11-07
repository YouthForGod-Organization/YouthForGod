# YouthForGod

Youth for God is a React single-page conference site for the 2027 “Living as the Light” conference, centered on Ephesians 5:8. The app currently ships the landing page and media archive by default, with schedule, speakers, FAQ, and registration pages held behind a conference-planning feature flag.

## Stack.

- React 19 with TypeScript
- React Router for client-side routing
- Webpack for local development and production bundles
- Sass for page and component styling
- Playwright for end-to-end coverage on desktop and mobile viewports

## App Routes

- `/` renders the landing page with 2027 hero artwork and event summary, plus the labeled 2026 promo video.
- `/media` renders the 2026 sermon and music video archive.
- `/schedule` renders the Friday/Saturday schedule with times and session titles when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/speakers` renders the featured speaker roster when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/faq` renders current attendee guidance and support links when `YFG_SHOW_CONFERENCE_PAGES=true`.
- `/register` renders 2027 dates and venue with the hosted registration iframe when `YFG_SHOW_CONFERENCE_PAGES=true`.
- When `YFG_SHOW_CONFERENCE_PAGES` is not enabled, `/schedule`, `/speakers`, `/faq`, and `/register` redirect to `/`.

## Conference Page Flag

Conference-planning pages are controlled by a build-time flag, which is off by default. The current local setup enables all pages. To restore the schedule, speakers, FAQ, and registration routes for a future conference, set this environment variable at build time:

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

## Visual Design

The November 2026 redesign follows the supplied **Y4G Site v2** mockup: oversized Montserrat headings, Open Sans body copy, cream mastheads, selective thin dividers and square controls, gray-brown accents and natural-color speaker portraits and grayscale media imagery. Original logos, page ordering, full footer information and the conference feature flag remain in place. Current conference copy follows the 2027 PDF. Both schedule days stay visible; FAQ disclosures, media links and the hosted registration flow retain their existing behavior. The home page opens directly with the Living as the Light artwork; the previous introductory heading, date block and View Media CTA have been removed. Media remains available through the navigation and footer.

Thin 1px warm-gray dividers separate the navigation, schedule day headings/rows, speaker rows and FAQ entries. Media cards, the promo video and the registration form have matching 1px frames. Additional lines separate interior mastheads, the home information/scripture blocks and footer copyright. Controls retain their existing styling. Media links have no underline. Keyboard-only focus indicators remain visible.

Shared colors and spacing live in `src/styles/_variables.scss`. Interior mastheads use the `styles` mixin in `src/styles/_page-hero.scss`; each page imports it from its own stylesheet. Page-specific layouts remain in their component Sass files. Add mobile styles first and extend them with `min-width` queries. The full desktop navigation starts at 1024px so links do not crowd the logo on tablets.

Run `npm start` to preview locally. Validate both feature-flag states:

```bash
YFG_SHOW_CONFERENCE_PAGES=false npm test
YFG_SHOW_CONFERENCE_PAGES=true npm test
npm run build
```

For full-page desktop and mobile screenshots of each available route, run `YFG_SHOW_CONFERENCE_PAGES=true YFG_CAPTURE_SCREENSHOTS=true npm test -- --grep "redesigned pages"`. Images are written into the matching test output directories under `test-results/`. The responsive checks cover viewport overflow, original header/footer branding and mobile-menu navigation.

The home hero artwork is `public/living-as-the-light-hero.jpg`, a 2400×1350 JPEG derived from the supplied “Living as the Light-2.png”. At widths below 768px, the hero uses `public/living-as-the-light-hero-mobile.jpg`, a 1080×1920 (9:16) JPEG derived from “Living as the Light-3.png”. At 768px and above, it uses the 16:9 landscape artwork. Both images display uncropped with descriptive alternative text; picture sources and HTML preloads use matching breakpoints. Current event copy follows the supplied 2027 PDF; the media archive and labeled promo remain from 2026.

## Conference Content

See [2027 conference content](docs/conference-2027.md) for the source, full schedule, registration confirmation and outstanding speaker portraits. Current dates, venue, sermon summaries and scripture references live in `src/data/conference.ts`. The existing Subsplash link is confirmed by the user for 2027; visitors should use the form for current pricing and refund terms.

Schedule rows display times and titles only. Detailed teaching notes remain in `src/data/conference.ts` for reference and are not rendered below each session.

### Current palette

| Color | Use |
| --- | --- |
| `#FFFFFF` | Navbar/mobile menu, main page backgrounds, schedule day headers and cards |
| `#FFFBDD` | Interior mastheads and home information section |
| `#878063` | Gray-yellow support panel and divider accents |
| `#736738` | Gray-brown buttons and footer |
| `#8396BA` | Reserved blue accent; not used for large page backgrounds |
| `#8A96A8` | Media placeholder surfaces |

Semantic tokens in `src/styles/_variables.scss` own the palette. Interior page mastheads use `#FFFBDD`. Speaker image areas use neutral backgrounds with unfiltered photos. Dark text is used on smaller blue/gray-yellow surfaces; cream text is used on brown buttons and footer. The artwork, content and layouts are unchanged. The externally hosted registration form controls its own internal colors.

Navbar page links use text-only brown hover, focus and active states on white, without a background fill. The Register button retains its brown background on hover.
