# Task Plan: Simplify sessions and refresh desktop hero

## Goal
Remove session metadata/descriptions/references from the schedule and use the new desktop artwork.

## Existing Context
Reviewed Schedule component and styles, existing schedule/hero tests, README, current conference data and artwork conventions. New desktop source is Living as the Light-2.png (6000×3375).

## Expected Behavior
Each schedule row shows only its time and activity/session title. Preserve teaching source data for reference. Desktop uses the new supplied artwork, mobile keeps the existing portrait source and breakpoint.

## Test Plan
Update existing schedule assertions for absence of session details, confirm failure, then run schedule, landing and responsive desktop/mobile coverage. Production build runs through the test preview command.

## Implementation Plan
1. Update tests before removing rendered session details and unused styles.
2. Replace the desktop JPEG with an optimized copy of the supplied file.
3. Validate and document final behavior.

## Documentation Plan
Update README and conference documentation; record test results here.

## Results
- Updated schedule test failed before implementation because all 15 extra session detail elements remained.
- Removed those details from all five sessions and their unused styles. Times and titles remain; teaching source data is preserved.
- Replaced the desktop asset with a 2400×1350 JPEG derived from Living as the Light-2.png. Mobile asset and breakpoint unchanged.
- Desktop/mobile schedule, landing and responsive checks: 8 passed. Production build passed through the preview command; `git diff --check` passed.
