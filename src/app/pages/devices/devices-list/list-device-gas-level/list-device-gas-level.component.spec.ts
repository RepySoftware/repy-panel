import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviceGasLevelComponent } from './list-device-gas-level.component';

describe('ListDeviceGasLevelComponent', () => {
  let component: ListDeviceGasLevelComponent;
  let fixture: ComponentFixture<ListDeviceGasLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeviceGasLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviceGasLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
