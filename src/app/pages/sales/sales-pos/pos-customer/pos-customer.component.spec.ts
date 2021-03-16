import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCustomerComponent } from './pos-customer.component';

describe('PosCustomerComponent', () => {
  let component: PosCustomerComponent;
  let fixture: ComponentFixture<PosCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
