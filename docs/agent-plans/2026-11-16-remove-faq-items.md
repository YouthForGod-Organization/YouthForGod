# Task Plan: Remove speaker and hotel FAQ items

## Goal
Remove the requested speaker and hotel questions and their answers from the FAQ.

## Existing Context
Reviewed README.md, AGENTS.md, package.json, playwright.config.ts, FAQ.tsx and existing FAQ route coverage. FAQ entries are rendered from a local array.

## Expected Behavior
The FAQ no longer includes “Who will be speaking?” or “Are hotels provided?” and their answers. Other questions and the dedicated speakers page remain unchanged.

## Test Plan
Run existing desktop/mobile FAQ behavior coverage and its production preview build. No new tests for this straightforward copy removal.

## Implementation Plan
Remove the two array entries, then run existing checks.

## Documentation Plan
Record the removed entries and verification in this plan.

## Results
Removed both requested FAQ entries. Desktop/mobile FAQ checks: 2 passed. Production build passed through the preview command; `git diff --check` passed.
