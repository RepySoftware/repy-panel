import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersComponent } from './sale-orders.component';

describe('SaleOrdersComponent', () => {
  let component: SaleOrdersComponent;
  let fixture: ComponentFixture<SaleOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
