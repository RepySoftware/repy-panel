import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByPeriodComponent } from './sales-by-period.component';

describe('SalesByPeriodComponent', () => {
  let component: SalesByPeriodComponent;
  let fixture: ComponentFixture<SalesByPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
