# Task Plan: Refresh desktop hero artwork

## Goal
Replace the desktop hero with the supplied Living as the Light-2 2.png, displaying “Live as Light.”

## Existing Context
Reviewed Landing.tsx picture sources, existing image tests, current artwork documentation and source dimensions (3000×1687). Mobile uses its own portrait source below 768px.

## Expected Behavior
Desktop uses the new artwork without cropping. Preserve mobile artwork, page copy and responsive breakpoint. Use descriptive shared alt text appropriate to both variants.

## Test Plan
Use existing desktop/mobile landing checks for image loading, source selection and aspect ratio, plus the production preview build. No new test needed for an asset-only replacement; update the existing alt-text locator.

## Implementation Plan
Optimize the supplied PNG to the existing desktop JPEG path, update shared image description and documentation, then validate.

## Documentation Plan
Update README/source provenance and record verification here.

## Results
Replaced the desktop JPEG with the supplied artwork optimized to 2400×1349, and matched the image dimensions and shared alt text. Mobile artwork is unchanged. Desktop/mobile landing checks: 4 passed. Final production build passed with asset-size warnings; `git diff --check` passed.
