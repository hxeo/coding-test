import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FleetStatusComponent } from './fleet-status.component';

describe('FleetStatusComponent', () => {
  let fixture: ComponentFixture<FleetStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetStatusComponent);
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
