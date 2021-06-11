import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGasLevelMapInfoComponent } from './device-gas-level-map-info.component';

describe('DeviceGasLevelMapInfoComponent', () => {
  let component: DeviceGasLevelMapInfoComponent;
  let fixture: ComponentFixture<DeviceGasLevelMapInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGasLevelMapInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGasLevelMapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
