import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeliveryInstructionComponent } from './card-delivery-instruction.component';

describe('CardDeliveryInstructionComponent', () => {
  let component: CardDeliveryInstructionComponent;
  let fixture: ComponentFixture<CardDeliveryInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeliveryInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeliveryInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
