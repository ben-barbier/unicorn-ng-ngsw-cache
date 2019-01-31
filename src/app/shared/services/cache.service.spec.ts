import { TestBed } from '@angular/core/testing';

import { SwCacheService } from './cache.service';

describe('SwCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwCacheService = TestBed.get(SwCacheService);
    expect(service).toBeTruthy();
  });
});
