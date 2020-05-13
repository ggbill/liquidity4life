import { TestBed, inject } from '@angular/core/testing';

import { ThreepcLifeNoutilsService } from './threepc-life-noutils.service';

describe('ThreepcLifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreepcLifeNoutilsService]
    });
  });

  it('should be created', inject([ThreepcLifeNoutilsService], (service: ThreepcLifeNoutilsService) => {
    expect(service).toBeTruthy();
  }));
});
