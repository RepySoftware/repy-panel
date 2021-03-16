import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSummaryComponent } from './pos-summary.component';

describe('PosSummaryComponent', () => {
  let component: PosSummaryComponent;
  let fixture: ComponentFixture<PosSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
