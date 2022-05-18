import { TestBed } from '@angular/core/testing';

import { SerialSubtitleService } from './serial-subtitle.service';

describe('SerialSubtitleService', () => {
  let service: SerialSubtitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialSubtitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
