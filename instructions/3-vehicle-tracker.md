# Part 3 — Live Vehicle Tracker

Add a live position view to the dashboard inside `src/3-vehicle-tracker.component.ts`.

`fetchPositions()` is already defined in that file — treat it like an HTTP call. It returns the current positions of all vehicles.

The view should:

- Refresh automatically every 5 seconds
- Show each vehicle's ID, status, latitude, and longitude
- Clean up properly when the component is removed from the page

If anything is unclear, ask.
