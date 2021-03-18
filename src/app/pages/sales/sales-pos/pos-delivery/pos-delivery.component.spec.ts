import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosDeliveryComponent } from './pos-delivery.component';

describe('PosDeliveryComponent', () => {
  let component: PosDeliveryComponent;
  let fixture: ComponentFixture<PosDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
