# Task Plan: White backgrounds and neutral speaker/schedule surfaces

## Goal
Remove blue from speaker image areas and schedule headers, and increase white backgrounds throughout the site.

## Existing Context
Reviewed shared palette/global styles, page mastheads, speaker portrait styling, schedule header styling and existing responsive coverage. Speaker photos currently have a grayscale filter and blue wrapper backgrounds.

## Expected Behavior
Use white as the main background and retain #FFFBDD on interior mastheads, schedule day headers and the home information section. Speaker image areas use a neutral surface and original photo colors with no filter. Preserve content, thin borders, artwork and enabled routes.

## Test Plan
Use existing desktop/mobile responsive tests and production preview build for this reversible visual adjustment. No tests that mirror CSS declarations are needed.

## Implementation Plan
1. Add a distinct cream token and switch the main canvas to white.
2. Replace blue speaker/schedule surfaces and remove the portrait filter.
3. Document and verify.

## Documentation Plan
Update README palette and record validation here.

## Results
- Main backgrounds/navigation/cards now use white; cream remains on page mastheads, schedule headers and the home information section.
- Speaker portraits use original colors on neutral surfaces; schedule headers no longer use blue.
- Existing desktop/mobile responsive checks: 2 passed. Production build passed through the preview command; `git diff --check` passed.
