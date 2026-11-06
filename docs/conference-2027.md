# Conference 2027

Source: the user-supplied two-page `YouthForGod_2027.pdf`. Desktop artwork: `Living as the Light-2.png`; mobile artwork: `Living as the Light-3.png`. The website combines the artwork title, **Living as the Light**, with the PDF teaching theme, **You – a lit’L Christian?**, meaning “you are light in the Lord.” The main reference is Ephesians 5:8.

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
| Saturday | 9:00 AM | Session II: Expose the works of Darkness | Ephesians 5:13 |
| Saturday | 11:00 AM | Session III: The best use of Time | Ephesians 5:15–16 |
| Saturday | 12:30 PM | Lunch | |
| Saturday | 2:30 PM | Session IV: Be filled with the Spirit | Ephesians 5:18b |
| Saturday | 4:30 PM | Session V: Be imitators of God | Ephesians 5:1 |
| Saturday | 6:00 PM | Supper | |
| Saturday | 7:00–9:00 PM | Bonfire | |

The PDF gives Session IV as 14:30 without repeating the day; its placement between Saturday lunch and Session V identifies it as Saturday. Times are displayed in 12-hour notation. Teaching summaries and supporting scripture references are retained in the source data. The public schedule displays only times and session/activity titles, with no speaker metadata, durations, summaries or supporting texts beneath each session. The document's illustrative legal claim is not reproduced as public event information.

## Ownership and outstanding information

`src/data/conference.ts` holds current dates, venue and session details. Page components render this content using existing styles and routes. FAQ answers summarize the current event. Update these facts and their Playwright assertions together.

The user confirmed that the existing Subsplash link is already updated for 2027. Preserve the iframe and fallback link. Pricing and registration/refund deadlines were not supplied in the PDF, so the site directs visitors to the current form instead of showing 2026 prices or deadlines. No checkout or payment integration settings were changed.

Portraits for Ivan Dzyuba and Andrey Sentsov are not supplied; initials and “Portrait coming soon” are shown. Existing portraits are retained only for Roman Balatskiy and Daniel Clark. No old church affiliations are presented as confirmed 2027 information.

The media page remains the 2026 recording archive. The home promo video is retained and labeled “2026 · SOLUS CHRISTUS.” Original logos and footer contact details remain unchanged. The supplied 2027 hero uses portrait artwork below 768px and landscape artwork at 768px and above. The HTML shell preloads only the applicable image.

## Validation

Run `YFG_SHOW_CONFERENCE_PAGES=true npm test` to exercise current conference pages and archived media on desktop and mobile. Playwright builds the production bundle with `npm run build` before serving its test preview. Use `npm start` for manual preview when desired.
