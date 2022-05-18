import { TestBed } from '@angular/core/testing';

import { SoonService } from './soon.service';

describe('SoonService', () => {
  let service: SoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
