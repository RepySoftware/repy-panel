import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsCustomersNextGasSalesComponent } from './persons-customers-next-gas-sales.component';

describe('PersonsCustomersNextGasSalesComponent', () => {
  let component: PersonsCustomersNextGasSalesComponent;
  let fixture: ComponentFixture<PersonsCustomersNextGasSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsCustomersNextGasSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsCustomersNextGasSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
