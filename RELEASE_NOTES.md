# Retro LiveTiming – MultiView Edition v1.4.0

This release is a major MultiView update. It consolidates the interface into a single configurable **MULTI** layout, introduces the new **MULTI - SCREEN LAYOUT** menu, and includes a **complete rebuild of P4** for Practice, Qualifying and Race.

## Highlights

- Reworked the interface around a single **MULTI** layout.
- Added the new **MULTI - SCREEN LAYOUT** menu.
- Completely rebuilt **P4** with dedicated layouts for **Practice, Qualifying and Race**.
- Added direct access to the **Race Control Tracker** inside MULTI via **T**.
- Improved compatibility with newer 2026 timing data.
- Fixed the Barcelona 2026 FP1 white-screen crash.
- Refined spacing, alignment, replay handling and readability across the MultiView layouts.
- Updated repository screenshots for the current design.

## MULTI - SCREEN LAYOUT

The previous separate Multi layouts are now consolidated into one configurable **MULTI** view.

The four screen positions can be configured independently:

- **TOP LEFT**
- **TOP RIGHT**
- **BOTTOM LEFT**
- **BOTTOM RIGHT**

Each position can display one of five views:

- **P1** – Main timing
- **P2** – Extended timing / speed and status information
- **P3** – Race Control, circuit map and weather
- **P4** – Session-specific compact timing overview
- **T** – Race Control Tracker

Selecting a view that is already assigned to another position automatically swaps the affected windows.

**DEFAULT** restores the standard arrangement:

- Top Left: **P1**
- Top Right: **P2**
- Bottom Left: **P3**
- Bottom Right: **P4**

The Screen Layout menu has also been enlarged for easier use and is now fully in English.

## P4 – Complete Rebuild

P4 has been rebuilt from the ground up for the MultiView Edition.

Instead of sharing one generic presentation, P4 now uses dedicated layouts for each session type.

### Practice

- New compact Practice layout.
- Reworked column structure, spacing and alignment.
- Compact sector values.
- Theoretical sector-best presentation with rotating driver abbreviations.
- Theoretical best lap highlighted in magenta.
- Refined GAP positioning.
- Improved S1 / S2 / S3 presentation.
- Improved Theo S3 handling and visibility.
- Removed unnecessary headings for a cleaner MultiView presentation.
- Session-specific handling for Practice data.

### Qualifying

- Dedicated Qualifying layout.
- Reworked Q1 / Q2 / Q3 presentation.
- Improved session-time and sector alignment.
- Improved theoretical-sector presentation.
- Refined driver-status and elimination display.
- Improved first-row and header handling.
- Better spacing and readability across the full P4 Qualifying view.

### Race

- Dedicated Race layout.
- Reworked position, car number and driver spacing.
- Improved race-specific column alignment.
- Refined pit-count presentation.
- Improved theoretical-sector / timing handling where available.
- Cleaner compact race header and improved overall readability.

## P1 / P2 / P3 Improvements

### P1

- Refined timing-column spacing and alignment.
- Improved BEST lap presentation.
- Simplified compact headers.
- Cleaner MultiView presentation.

### P2

- ON TRACK / IN PITS / STOPPED counters.
- Refined speed-ranking area.
- Improved BEST LAP / ON LAP presentation.
- Improved gap-to-car-ahead alignment.
- Refined lap-count positioning.
- Improved replay rewind handling.
- Cached lap-dependent values are reset correctly when seeking backwards.

### P3

- Race Control messages displayed chronologically.
- Newest message remains at the bottom.
- Integrated circuit map.
- Wind-direction arrow aligned to the displayed circuit orientation.
- 3-hour track-temperature and air-temperature history.
- Compact weather block with track temperature, air temperature, wet/dry status, wind speed, humidity and pressure.
- Refined lower-layout sizing and spacing.

## Race Control Tracker

- Available directly inside MULTI via **T**.
- Tracks Safety Car, Virtual Safety Car and Red Flag phases.
- Cumulative **SC / VSC / RED** counters.
- Counter history remains visible after a phase has ended.
- Improved handling of older F1 replay timing data.
- Added Red Flag filtering support for Formula 2 timing where available.

## 2026 Timing Compatibility

- Improved compatibility with newer 2026 timing feeds.
- Fixed a crash that could produce a completely white Retro LiveTiming window when a driver entry did not contain a separate `LastName` value.
- Driver names now safely fall back to other available name fields when required.
- This specifically fixes the Barcelona 2026 FP1 replay issue found during testing.

## Track Map / MultiViewer

The integrated P3 circuit map uses circuit geometry sourced from **MultiViewer** data.

MultiViewer / live timing must be running and accessible to Retro LiveTiming for the relevant timing and circuit data.

> This project is not affiliated with or endorsed by MultiViewer.

## Updated Screenshots

The repository screenshots have been refreshed for the current version, including:

- Practice
- Qualifying
- Race
- P4
- MULTI - SCREEN LAYOUT

## Installation

1. Download `RetroLiveTiming-MultiView-v1.4.0-ASAR.zip`.
2. Close Retro LiveTiming completely.
3. Extract `app.asar` from the ZIP.
4. Back up the existing `resources/app.asar` file.
5. Replace it with the new `app.asar`.
6. Start Retro LiveTiming again.

## Support

If you enjoy the MultiView Edition and would like to support continued development:

☕ **Buy Me a Coffee – MiSeRy81**  
https://buymeacoffee.com/MiSeRy81

## Disclaimer

This is an unofficial community modification of Retro LiveTiming by TrueVirusTV.

It is not affiliated with or endorsed by Formula 1, F1 TV, MultiViewer, or their respective owners.
