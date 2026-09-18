# Retro LiveTiming MultiView Edition v1.3.0

This update adds a customizable **MULTI 2** layout and improves replay handling
and Race Control tracking.

## Highlights

- Added a customizable **MULTI 2** 2×2 layout.
- P1, P2, P3 and P4 can now be freely assigned to any of the four Multi 2 windows.
- Added a built-in **LAYOUT** control.
- Selecting an already-used view automatically swaps the affected windows.
- **STANDARD** restores the default Multi 2 arrangement.
- Multi 1 remains unchanged as the fixed standard layout.
- Added cumulative **SC / VSC / RED** Race Control counters.
- Improved Race Control counter compatibility with older Formula 1 replay timing data.
- Improved P2 replay rewind handling.
- Cached lap-dependent P2 values are reset when seeking backwards, preventing data from later laps from remaining visible.
- Updated screenshots for Practice, Qualifying, Race and the new customizable Multi 2 layout.

## ASAR update installation

1. Download `RetroLiveTiming-MultiView-v1.3.0-ASAR.zip`.
2. Close Retro LiveTiming.
3. Extract `app.asar` from the ZIP.
4. Back up the existing `resources/app.asar` file in your Retro LiveTiming installation.
5. Replace it with the new `app.asar`.
6. Start Retro LiveTiming again.

MultiViewer / live timing must be available for the live data integration.
