import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMethodsComponent } from './analysis-methods.component';

describe('AnalysisMethodsComponent', () => {
  let component: AnalysisMethodsComponent;
  let fixture: ComponentFixture<AnalysisMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
