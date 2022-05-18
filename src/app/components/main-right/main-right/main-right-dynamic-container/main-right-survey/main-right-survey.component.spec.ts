import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSurveyComponent } from './main-right-survey.component';

describe('MainRightSurveyComponent', () => {
  let component: MainRightSurveyComponent;
  let fixture: ComponentFixture<MainRightSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
