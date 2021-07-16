import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGasLevelHistoryReadsComponent } from './device-gas-level-history-reads.component';

describe('DeviceGasLevelHistoryReadsComponent', () => {
  let component: DeviceGasLevelHistoryReadsComponent;
  let fixture: ComponentFixture<DeviceGasLevelHistoryReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGasLevelHistoryReadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGasLevelHistoryReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
