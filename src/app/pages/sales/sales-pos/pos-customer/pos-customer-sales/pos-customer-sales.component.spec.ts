import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCustomerSalesComponent } from './pos-customer-sales.component';

describe('PosCustomerSalesComponent', () => {
  let component: PosCustomerSalesComponent;
  let fixture: ComponentFixture<PosCustomerSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosCustomerSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCustomerSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
