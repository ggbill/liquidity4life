import { TestBed, inject } from '@angular/core/testing';

import { ThreepcNolifeUtilsService } from './threepc-nolife-utils.service';

describe('ThreepcNolifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreepcNolifeUtilsService]
    });
  });

  it('should be created', inject([ThreepcNolifeUtilsService], (service: ThreepcNolifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
