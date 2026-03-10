# Part 2 — MFE Shell Integration

This part is code + discussion, no need to wire up a real remote, focus on the Angular side.

The fleet app is a **shell** that loads feature modules from separate deployments. One of those is a `VehicleDetailComponent` that lives in a remote called `vehicleDetail`.

Wire up the shell so it can:

1. Load the component lazily as a route
2. Pass a vehicle ID into it
3. React when the component signals that a vehicle was selected

Then write the `VehicleDetailComponent` itself — just the contract (inputs, outputs, minimal template).

If you have time, there's a follow-up question about shared state across remotes.

If anything is unclear, ask.
