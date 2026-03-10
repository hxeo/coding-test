import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VehicleTrackerComponent } from './vehicle-tracker.component';

describe('VehicleTrackerComponent', () => {
  let fixture: ComponentFixture<VehicleTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleTrackerComponent);
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
