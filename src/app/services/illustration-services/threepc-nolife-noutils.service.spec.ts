import { TestBed, inject } from '@angular/core/testing';

import { ThreePcNoLifeNoUtilsService } from './threepc-nolife-noutils.service';

describe('3pcNolifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreePcNoLifeNoUtilsService]
    });
  });

  it('should be created', inject([ThreePcNoLifeNoUtilsService], (service: ThreePcNoLifeNoUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
