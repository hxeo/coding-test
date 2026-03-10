import { Routes } from '@angular/router';
import { FleetStatusComponent } from './1-fleet-status/fleet-status.component';
import { VehicleDetailComponent } from './2-vehicle-detail/vehicle-detail.component';
import { VehicleTrackerComponent } from './3-vehicle-tracker/vehicle-tracker.component';

export const routes: Routes = [
  { path: '', redirectTo: 'fleet', pathMatch: 'full' },
  { path: 'fleet', component: FleetStatusComponent },
  { path: 'vehicle/:vehicleId', component: VehicleDetailComponent },
  { path: 'tracker', component: VehicleTrackerComponent },
];
