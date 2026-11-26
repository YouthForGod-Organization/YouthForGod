# Task Plan: Shorten home copy

## Goal
Remove the two requested explanatory paragraphs from the home page.

## Existing Context
Reviewed Landing.tsx and existing landing assertions. The paragraphs follow the conference title/dates and location.

## Expected Behavior
Keep the conference heading, title/dates, location and scripture. Remove only the theme explanation and five-session overview from the home page.

## Test Plan
Run existing desktop/mobile landing coverage and production preview build. No new tests for this copy-only removal.

## Implementation Plan
Delete the two paragraph elements and validate the remaining home content.

## Documentation Plan
Record the scope and checks in this plan.

## Results
Removed both requested home paragraphs. Existing desktop/mobile landing checks: 4 passed. Production build passed through the preview command; `git diff --check` passed.
