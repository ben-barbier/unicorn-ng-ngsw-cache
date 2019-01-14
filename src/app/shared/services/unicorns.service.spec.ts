import { TestBed } from '@angular/core/testing';

import { UnicornsService } from './unicorns.service';

describe('UnicornsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornsService = TestBed.get(UnicornsService);
    expect(service).toBeTruthy();
  });
});
