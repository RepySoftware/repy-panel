import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaleOrderComponent } from './card-sale-order.component';

describe('CardSaleOrderComponent', () => {
  let component: CardSaleOrderComponent;
  let fixture: ComponentFixture<CardSaleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSaleOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSaleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
