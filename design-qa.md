# Integration story — visual and interaction QA

Reference: the user's circular integration graphic attached on 21 October 2026.
Scope: adapt its circular composition to rumahl, explicitly without the example's
app tiles. This is a direction reference, not a request to copy its unrelated apps.

## Findings and revisions

- P1, resolved: the initial implementation used rectangular service cards.
  Replaced them with original full-color application marks, freely positioned
  around a circular field with two fine rings and the existing rumahl mark.
- P2, resolved: initial monochrome masks discarded multicolor brand details.
  Downloaded vector assets are now rendered directly as images. Only black
  monochrome marks are displayed in white for contrast on the dark field.
- Intentional adaptation: six relevant services instead of the reference's
  unrelated services; existing rumahl green, type and explanatory copy retained.
  No card backgrounds, card borders, status checkmarks or generated artwork.

## Visual evidence

- Desktop section: `/tmp/rumahl-integration-desktop.png` (1440 × 960 viewport).
- Mobile section: `/tmp/rumahl-integration-mobile.png` (390 × 844 viewport).
- Focused orbit: `/tmp/rumahl-orbit-detail.png`, excluding unrelated site navigation.
- The mobile full-element capture includes the site's fixed navigation at its
  viewport position. It is not part of the orbit and is not treated as a source
  layout mismatch. The orbit itself has no overlapping labels or cropped logos.

## Required fidelity surfaces

- Typography: existing Inter and monospace numbering retained. App names remain
  readable below their marks; no label truncation at tested sizes.
- Layout: circular field, concentric rings, open service positions and central
  mark follow the reference direction. Boxes are deliberately absent as requested.
- Colors: rumahl dark green and pale green center; original app colors retained.
- Assets: original SVG logos, not redrawn symbols or generated raster images.
  Sources, checksums and collection license live in `public/icons/apps/original/`.
- Content: current integration design explained in three steps; provider support
  explicitly marked as in development, rather than depicting live connectivity.

## Browser verification

Chromium via the existing local Playwright installation and browser libraries:

- Forward and reverse scrolling select all three intended phases.
- Step buttons navigate the scroll story and update their pressed state.
- Mobile layout uses ordinary document flow and selectable steps.
- Reduced-motion mode disables pinning and transitions; steps remain operable.
- No horizontal overflow at 1440 × 960, 1280 × 800, 1024 × 768 or 390 × 844.
- Pinned header and footer fit inside all tested desktop viewports.
- All six logo images load successfully; no browser runtime errors.

No remaining P0, P1 or P2 findings for this scoped reference adaptation.

final result: passed
