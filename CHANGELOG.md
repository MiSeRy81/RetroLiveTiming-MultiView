# Changelog

## [1.1.0] - 2026-09-17

P3 weather and track-map update for the **Retro LiveTiming MultiView Edition**.

### P3
- Added an integrated circuit map using MultiViewer circuit geometry.
- Added a custom wind-direction arrow aligned to the displayed circuit orientation.
- Corrected the wind-arrow calculation so the arrow shows the direction the wind is travelling relative to the rotated track map.
- Added a 3-hour graph for track temperature and air temperature.
- Added/refined the compact weather block for track temperature, air temperature, wet/dry status, wind speed, humidity and pressure.
- Refined the lower P3 layout so the map, graph and weather data remain clearly above the footer.
- Fixed the 70°C chart label positioning and clipping.
- Refined map size, chart size, weather-label spacing and marker-arrow alignment.
- Replaced the simple wind indicator with a clearer custom yellow arrow.

### Multi 1 / Multi 2
- Integrated the lower P3 map/weather section into **Multi 1 – P3** and **Multi 2 – PC**.
- Increased the size and readability of the map, temperature graph and weather block in the Multi layouts.
- Fine-tuned vertical placement and spacing to match the lower P3 presentation.

### Data / Integration
- Circuit geometry is sourced from MultiViewer circuit data.
- Live weather values continue to use the MultiViewer live-timing data connection.

## [1.0.0] - 2026-09-15

First public release of the **Retro LiveTiming MultiView Edition**.

### Multi 1 / Multi 2
- Refined 2×2 MultiView layout.
- Standardized compact typography, spacing and column positioning.
- Simplified P1/P4 headers for Practice and Race.

### P1
- Refined car-number and timing-column positioning.
- Improved BEST lap presentation and status colouring.
- Removed unnecessary compact-layout headings.
- Preserved timing values while reducing visual clutter.

### P2
- Added/refined ON TRACK, IN PITS and STOPPED counters.
- Added compact six-row speed ranking area.
- Refined BEST LAP / ON LAP presentation.
- Improved gap-to-car-ahead alignment.
- Refined lap-count positioning.

### P3
- Changed race-control message order so the newest message is shown at the bottom.

### P4 – Practice
- Reworked Practice layout.
- Removed Speed 1 / Speed 2 / Speed 3 columns.
- Compact one-decimal sector formatting.
- Added rotating theoretical sector-best / driver-abbreviation headers.
- Added theoretical best-lap display in magenta.
- Centered GAP.
- Aligned last-lap values below the theoretical best-lap column.
- Simplified compact headings.

### P4 – Race
- Refined car-number positioning.
- Removed the P heading while retaining pit-count values.
- Simplified compact headings.

### Footer
- Corrected session countdown timing.
- Refined track-status bar height and vertical centering.

### Known / Work in progress
- Qualifying layout is not yet finalized and will be refined in a future update.
