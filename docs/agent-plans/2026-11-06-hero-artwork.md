# Task Plan: Hero artwork

## Goal
Use the supplied Living as the Light artwork as the home hero image.

## Existing Context
Reviewed Landing.tsx, Landing.scss, existing landing and responsive tests, and the current README/design plans. The source is a 32 MB PNG with its own title and event date.

## Expected Behavior
Replace the previous hero artwork on desktop and mobile with the supplied image, preserving its full aspect ratio so text is not cropped. Keep the existing page structure, CTA, logos, footer and other event content. This request replaces artwork only; it does not migrate the site's remaining 2026 content.

## Test Plan
Update existing landing coverage to assert the supplied artwork loads successfully. Run the landing and responsive tests on desktop/mobile, including the production preview build.

## Implementation Plan
1. Add an image-loading assertion and confirm failure.
2. Create a web-sized JPEG copy of the supplied PNG without changing its design.
3. Replace the hero picture source with the new artwork and descriptive alt text.
4. Run relevant tests and update documentation.

## Documentation Plan
Document the new asset, source and artwork-only scope in README and this plan.

## Results
- New image assertion failed before implementation, then passed after replacing the artwork.
- Optimized the 6000×3375, 32 MB source into a 2400×1350 JPEG of approximately 1.1 MB. The supplied original is unchanged.
- Desktop/mobile landing and responsive checks: 6 passed with conference pages enabled.
- Production build passed as part of `npm run preview:test`; `git diff --check` passed.
