import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicedButtonComponent } from './sliced-button.component';

describe('SlicedButtonComponent', () => {
  let component: SlicedButtonComponent;
  let fixture: ComponentFixture<SlicedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
