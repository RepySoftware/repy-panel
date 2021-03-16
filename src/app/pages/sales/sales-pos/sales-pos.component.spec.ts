import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPosComponent } from './sales-pos.component';

describe('SalesPosComponent', () => {
  let component: SalesPosComponent;
  let fixture: ComponentFixture<SalesPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
