import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGasLevelComponent } from './device-gas-level.component';

describe('DeviceGasLevelComponent', () => {
  let component: DeviceGasLevelComponent;
  let fixture: ComponentFixture<DeviceGasLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGasLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGasLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
