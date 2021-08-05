import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceFormComponent } from './product-price-form.component';

describe('ProductPriceFormComponent', () => {
  let component: ProductPriceFormComponent;
  let fixture: ComponentFixture<ProductPriceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
