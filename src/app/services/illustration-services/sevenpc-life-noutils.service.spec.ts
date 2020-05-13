import { TestBed, inject } from '@angular/core/testing';

import { SevenpcLifeNoutilsService } from './sevenpc-life-noutils.service';

describe('SevenpcLifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenpcLifeNoutilsService]
    });
  });

  it('should be created', inject([SevenpcLifeNoutilsService], (service: SevenpcLifeNoutilsService) => {
    expect(service).toBeTruthy();
  }));
});
