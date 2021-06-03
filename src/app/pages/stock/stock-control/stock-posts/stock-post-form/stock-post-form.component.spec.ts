import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPostFormComponent } from './stock-post-form.component';

describe('StockPostFormComponent', () => {
  let component: StockPostFormComponent;
  let fixture: ComponentFixture<StockPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
