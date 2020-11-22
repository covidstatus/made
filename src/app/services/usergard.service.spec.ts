import { TestBed } from '@angular/core/testing';

import { UsergardService } from './usergard.service';

describe('UsergardService', () => {
  let service: UsergardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
