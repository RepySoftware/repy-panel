import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInstructionFormComponent } from './delivery-instruction-form.component';

describe('DeliveryInstructionFormComponent', () => {
  let component: DeliveryInstructionFormComponent;
  let fixture: ComponentFixture<DeliveryInstructionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInstructionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInstructionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
