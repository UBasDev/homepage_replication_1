import { TestBed } from '@angular/core/testing';

import { HomepageFilmAnalysisService } from './homepage-film-analysis.service';

describe('HomepageFilmAnalysisService', () => {
  let service: HomepageFilmAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageFilmAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
