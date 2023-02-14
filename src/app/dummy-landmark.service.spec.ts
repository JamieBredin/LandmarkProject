import { TestBed } from '@angular/core/testing';

import { DummyLandmarkService } from './dummy-landmark.service';

describe('DummyLandmarkService', () => {
  let service: DummyLandmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyLandmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
