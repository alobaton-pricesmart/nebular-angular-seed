import { TestBed } from '@angular/core/testing';

import { HeadquartersService } from './headquarters.service';

describe('HeadquartersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadquartersService = TestBed.get(HeadquartersService);
    expect(service).toBeTruthy();
  });
});
