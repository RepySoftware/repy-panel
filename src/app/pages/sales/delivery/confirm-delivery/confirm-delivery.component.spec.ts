import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeliveryComponent } from './confirm-delivery.component';

describe('ConfirmDeliveryComponent', () => {
  let component: ConfirmDeliveryComponent;
  let fixture: ComponentFixture<ConfirmDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
