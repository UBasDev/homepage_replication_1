import { TestBed } from '@angular/core/testing';

import { HomepageNewReleasedArtistService } from './homepage-new-released-artist.service';

describe('HomepageNewReleasedArtistService', () => {
  let service: HomepageNewReleasedArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageNewReleasedArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
