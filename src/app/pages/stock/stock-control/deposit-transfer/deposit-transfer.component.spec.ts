import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositTransferComponent } from './deposit-transfer.component';

describe('DepositTransferComponent', () => {
  let component: DepositTransferComponent;
  let fixture: ComponentFixture<DepositTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
