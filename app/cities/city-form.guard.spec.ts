import { TestBed } from '@angular/core/testing';

import { CityFormGuard } from './city-form.guard';

describe('CityFormGuard', () => {
  let guard: CityFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CityFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
