import { TestBed, inject } from '@angular/core/testing';

import { OnepcNolifeNoutilsService } from './onepc-nolife-noutils.service';

describe('OnepcNolifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnepcNolifeNoutilsService]
    });
  });

  it('should be created', inject([OnepcNolifeNoutilsService], (service: OnepcNolifeNoutilsService) => {
    expect(service).toBeTruthy();
  }));
});
