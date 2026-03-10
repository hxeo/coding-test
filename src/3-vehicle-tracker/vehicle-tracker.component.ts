import { Component } from '@angular/core';
import { of } from 'rxjs';

export interface VehiclePosition {
  id: string;
  lat: number;
  lng: number;
  status: 'active' | 'idle' | 'maintenance';
}

// Treat this like an HttpClient call — it returns a cold Observable.
export function fetchPositions() {
  return of<VehiclePosition[]>([
    { id: 'VH-01', lat: 51.500 + Math.random() * 0.01, lng: -0.09 + Math.random() * 0.01, status: 'active' },
    { id: 'VH-02', lat: 51.510 + Math.random() * 0.01, lng: -0.10 + Math.random() * 0.01, status: 'idle' },
    { id: 'VH-03', lat: 51.490 + Math.random() * 0.01, lng: -0.11 + Math.random() * 0.01, status: 'maintenance' },
  ]);
}

@Component({
  selector: 'app-vehicle-tracker',
  standalone: true,
  template: `
    <h1>Live Vehicle Positions</h1>
  `,
})
export class VehicleTrackerComponent {}
