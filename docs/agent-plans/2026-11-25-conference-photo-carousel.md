# Task Plan: Add a conference photo carousel

## Goal
Add an automatically moving, manually browsable photo area near the bottom of the landing page using the supplied images.

## Existing Context
Reviewed Landing.tsx/SCSS, shared color tokens and global styles, footer placement, asset declarations, package scripts, Playwright configuration and page tests, README and conference documentation. Existing React hooks, local Sass and bundled WebP assets fit the feature without dependencies. The supplied conference photos are high-resolution JPEGs; the first attachment is a printing-press Instagram screenshot, so its inclusion is being clarified.

## Expected Behavior
Place a “Conference moments” gallery after the event information and before the footer. Show photos without cropping using a responsive, horizontally swipable slide area. Include previous/next controls, a current-photo counter and play/pause control. Auto-advance every five seconds only while visible, pause on hover, and stop auto-advance when visitors manually navigate or focus the photo area. Honor reduced-motion preferences by defaulting to paused and using instant scrolling. Retain the completed video play-button change.

## Test Plan
Write failing gallery tests first: bottom-of-page placement, loaded photos, next/previous wraparound, arrow-key navigation, automatic progression and pause, and reduced-motion behavior. Verify desktop/mobile layout and existing promo controls. Run a production build.

## Implementation Plan
1. Add regression tests and verify the expected missing-gallery failure.
2. Create optimized local WebP copies without changing original downloads; record original filenames and descriptions in gallery data/docs.
3. Add a self-contained PhotoCarousel component and stylesheet, with native horizontal scrolling and scroll snapping for touch browsing.
4. Insert the gallery below the information section, verify all images and controls, and inspect desktop/mobile screenshots.

## Documentation Plan
Document gallery placement, source provenance, asset preparation, autoplay/accessibility behavior and verification in README.md, docs/conference-2027.md and this plan.
