# Conference 2027

Source: the user-supplied two-page `YouthForGod_2027.pdf`. Desktop artwork: `Living as the Light-2 2.png` (“Live as Light”); mobile artwork: `Living as the Light-3.png`. The website combines the artwork title, **Living as the Light**, with the PDF teaching theme, **You – a lit’L Christian?**, meaning “you are light in the Lord.” The main reference is Ephesians 5:8.

## Temporary Speakers visibility

The Speakers page is temporarily hidden from navigation and the footer. `/speakers` redirects home even when conference pages are enabled. Its component, styles, portraits and roster remain in the repository for later restoration; see README.md for the route/link restoration steps.

## Confirmed information

- May 28–29, 2027.
- Bible Baptist Church, Citrus Heights, CA. The PDF does not supply a street address.
- Speakers: Roman Balatskiy, Daniel Clark, Ivan Dzyuba, Andrey Sentsov and one additional speaker to be determined.
- Daniel Clark teaches Session I. All other session assignments are pending.
- Sessions last 45 ± 5 minutes.

| Day | Time | Event | Key passage |
| --- | --- | --- | --- |
| Friday, May 28 | 5:00 PM | Registration | |
| Friday | 7:00 PM | Session I: Introduction | Ephesians 5:8 |
| Friday | 8:30–10:00 PM | Tea | |
| Saturday, May 29 | 7:00 AM | Registration | |
| Saturday | 9:00 AM | Session II: Expose the Works of Darkness | Ephesians 5:13 |
| Saturday | 11:00 AM | Session III: Making the Best Use of Time | Ephesians 5:15–16 |
| Saturday | 12:30 PM | Lunch | |
| Saturday | 2:30 PM | Session IV: Be Filled with the Spirit | Ephesians 5:18b |
| Saturday | 4:30 PM | Session V: Be Imitators of God | Ephesians 5:1 |
| Saturday | 6:00 PM | Supper | |
| Saturday | 7:00–9:00 PM | Bonfire | |

The PDF gives Session IV as 14:30 without repeating the day; its placement between Saturday lunch and Session V identifies it as Saturday. Times are displayed in 12-hour notation. Teaching summaries and supporting scripture references are retained in the source data. The public schedule displays only times and session/activity titles, with no speaker metadata, durations, summaries or supporting texts beneath each session. The document's illustrative legal claim is not reproduced as public event information.

## Ownership and outstanding information

`src/data/conference.ts` holds current dates, venue and session details. Page components render this content using existing styles and routes. FAQ answers summarize the current event. Update these facts and their Playwright assertions together.

The user confirmed that the existing Subsplash link is already updated for 2027. Preserve the iframe and fallback link. Pricing and registration/refund deadlines were not supplied in the PDF, so the site directs visitors to the current form instead of showing 2026 prices or deadlines. No checkout or payment integration settings were changed.

Portraits for Ivan Dzyuba and Andrey Sentsov are not supplied; initials and “Portrait coming soon” are shown. Existing portraits are retained only for Roman Balatskiy and Daniel Clark. No old church affiliations are presented as confirmed 2027 information.

The media page remains the 2026 recording archive. The home promo now uses the supplied `Y4G Eng Official v4.mp4`, optimized to a 1080p H.264/AAC MP4 at `src/assets/y4g-2027-promo.mp4` with a centered play button on a black background before playback; the former logo/title overlay has been removed. Both the routed Landing and the unrouted HomePage prototype reference this file. See README.md for encoding and playback-test instructions. Original logos and footer contact details remain unchanged. The supplied 2027 hero uses portrait artwork below 768px and landscape artwork at 768px and above. The HTML shell preloads only the applicable image.

## Landing photo gallery

The bottom-of-page gallery shows the first six supplied 2026 conference photographs in two columns and three rows, ending with the speaker sharing a message. The full-width section retains the cream background matching the event information above and the centered dark “Past Conference moments” title. Every tile uses an identical 4:3 ratio with cover cropping and consistent gaps on desktop and mobile. The static grid replaces automatic switching and swipe navigation; photos load lazily with descriptive alt text. Shared page gutters and consistent spacing frame the tiles. Each tile opens the full uncropped image and caption in an accessible modal, with Close, Escape and backdrop dismissal; keyboard focus returns to the tile on close. The attendees thumbnail uses an upward crop to retain faces.

The worship-leader photo (`worship.webp`, supplied as `68EB8C1F-7160-4DF2-A092-A60F0D99F835PART 1 IRINA BELASHOV YOG -6.JPEG`) and printing-press screenshot remain unused in the repository and are excluded from the bundle. Gallery images remain separate from current 2027 event details. The optimized WebPs retain a maximum dimension of 1600 pixels; cropping applies only in the displayed grid. Originals remain unchanged in Downloads.

| Gallery asset | Supplied source filename |
| --- | --- |
| `choir.webp` | `F407E7DD-806D-421F-832E-4AEDD8BE0F77PART 5 IRINA BELASHOV YOG -193.JPEG` |
| `conductor.webp` | `4B000FD5-E4FA-4CD2-98E1-FD5A2050BCB9PART 5 IRINA BELASHOV YOG -189.JPEG` |
| `attendees.webp` | `5D8057FF-C968-4BCC-8690-3D72AD83AA03PART 5 IRINA BELASHOV YOG -65.JPEG` |
| `musician.webp` | `411DF531-91DC-42D6-9C4D-91CDCC1E704CPART 5 IRINA BELASHOV YOG -5.JPEG` |
| `teaching.webp` | `0B3BB38A-DB2E-4A14-AE80-EF448A066BD6PART 1 IRINA BELASHOV YOG -26.JPEG` |
| `message.webp` | `CAE192E5-2733-4FA7-B1D4-9A8ED97C4639PART 5 IRINA BELASHOV YOG -159.JPEG` |

See README.md for grid layout, accessibility, photo replacement and test commands.

## Validation

Run `YFG_SHOW_CONFERENCE_PAGES=true npm test` to exercise current conference pages and archived media on desktop and mobile. Playwright builds the production bundle with `npm run build` before serving its test preview. Use `npm start` for manual preview when desired.
