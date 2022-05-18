import { TestBed } from '@angular/core/testing';

import { HomepageLastReleasedFilmFrameServiceService } from './homepage-last-released-film-frame-service.service';

describe('HomepageLastReleasedFilmFrameServiceService', () => {
  let service: HomepageLastReleasedFilmFrameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageLastReleasedFilmFrameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
