import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightAnswerQuestionComponent } from './main-right-answer-question.component';

describe('MainRightAnswerQuestionComponent', () => {
  let component: MainRightAnswerQuestionComponent;
  let fixture: ComponentFixture<MainRightAnswerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightAnswerQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
