# Task Plan: Polish schedule grammar and capitalization

## Goal
Make the public schedule wording grammatically clear and consistently capitalized.

## Existing Context
Reviewed src/data/conference.ts, schedule route assertions and docs/conference-2027.md. Times, dates, day labels and activity names are already consistently formatted.

## Expected Behavior
Use title case for all sermon titles: Expose the Works of Darkness; Making the Best Use of Time; Be Filled with the Spirit; Be Imitators of God. Preserve the schedule's dates, times and session numbering.

## Test Plan
Update existing schedule expectations and run desktop/mobile schedule checks plus the production preview build. No new tests for copy-only changes.

## Implementation Plan
Apply matching wording to source data, existing tests and schedule documentation, then validate.

## Documentation Plan
Update the schedule table in docs/conference-2027.md and record results here.

## Results
Updated four session titles, matching assertions and the documentation table. Desktop/mobile schedule tests: 2 passed. Production build passed through the preview command; `git diff --check` passed.
