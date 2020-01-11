import { TestBed } from '@angular/core/testing';

import { DrumKitService } from './drum-kit.service';

describe('DrumKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrumKitService = TestBed.get(DrumKitService);
    expect(service).toBeTruthy();
  });
});
