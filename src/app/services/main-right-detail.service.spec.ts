import { TestBed } from '@angular/core/testing';

import { MainRightDetailService } from './main-right-detail.service';

describe('MainRightDetailService', () => {
  let service: MainRightDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRightDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
