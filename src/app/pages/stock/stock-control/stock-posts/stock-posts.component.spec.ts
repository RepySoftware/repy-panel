import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPostsComponent } from './stock-posts.component';

describe('StockPostsComponent', () => {
  let component: StockPostsComponent;
  let fixture: ComponentFixture<StockPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
