import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderPaymentFormComponent } from './sale-order-payment-form.component';

describe('SaleOrderPaymentFormComponent', () => {
  let component: SaleOrderPaymentFormComponent;
  let fixture: ComponentFixture<SaleOrderPaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrderPaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
