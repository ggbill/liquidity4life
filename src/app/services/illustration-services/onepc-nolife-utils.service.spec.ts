import { TestBed, inject } from '@angular/core/testing';

import { OnepcNolifeUtilsService } from './onepc-nolife-utils.service';

describe('OnepcNolifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnepcNolifeUtilsService]
    });
  });

  it('should be created', inject([OnepcNolifeUtilsService], (service: OnepcNolifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
