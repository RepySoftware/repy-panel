import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDialogCloseComponent } from './button-dialog-close.component';

describe('ButtonDialogCloseComponent', () => {
  let component: ButtonDialogCloseComponent;
  let fixture: ComponentFixture<ButtonDialogCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDialogCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDialogCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
