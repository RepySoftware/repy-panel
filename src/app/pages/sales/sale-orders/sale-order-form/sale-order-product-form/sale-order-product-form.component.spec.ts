import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderProductFormComponent } from './sale-order-product-form.component';

describe('SaleOrderProductFormComponent', () => {
  let component: SaleOrderProductFormComponent;
  let fixture: ComponentFixture<SaleOrderProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrderProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
