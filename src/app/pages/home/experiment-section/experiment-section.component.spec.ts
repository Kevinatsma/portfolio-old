import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentSectionComponent } from './experiment-section.component';

describe('ExperimentSectionComponent', () => {
  let component: ExperimentSectionComponent;
  let fixture: ComponentFixture<ExperimentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
