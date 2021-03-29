import { TestBed } from '@angular/core/testing';

import { GraffService } from './graff.service';

describe('GraffService', () => {
  let service: GraffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
