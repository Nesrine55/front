import { TestBed } from '@angular/core/testing';

import { GetoffersService } from './getoffers.service';

describe('GetoffersService', () => {
  let service: GetoffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetoffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
