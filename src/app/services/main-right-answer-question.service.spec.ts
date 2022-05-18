import { TestBed } from '@angular/core/testing';

import { MainRightAnswerQuestionService } from './main-right-answer-question.service';

describe('MainRightAnswerQuestionService', () => {
  let service: MainRightAnswerQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRightAnswerQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
