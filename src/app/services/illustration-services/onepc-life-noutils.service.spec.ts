import { TestBed, inject } from '@angular/core/testing';

import { OnepcLifeNoutilsService } from './onepc-life-noutils.service';

describe('OnepcLifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnepcLifeNoutilsService]
    });
  });

  it('should be created', inject([OnepcLifeNoutilsService], (service: OnepcLifeNoutilsService) => {
    expect(service).toBeTruthy();
  }));
});
