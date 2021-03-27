import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderDetailsComponent } from './sale-order-details.component';

describe('SaleOrderDetailsComponent', () => {
  let component: SaleOrderDetailsComponent;
  let fixture: ComponentFixture<SaleOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
