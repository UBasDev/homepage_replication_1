import { TestBed } from '@angular/core/testing';

import { HomepageNewReleasedService } from './homepage-new-released.service';

describe('HomepageNewReleasedService', () => {
  let service: HomepageNewReleasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageNewReleasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
