import { TestBed, inject } from '@angular/core/testing';

import { ThreepcLifeUtilsService } from './threepc-life-utils.service';

describe('ThreepcLifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreepcLifeUtilsService]
    });
  });

  it('should be created', inject([ThreepcLifeUtilsService], (service: ThreepcLifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
