import { TestBed, inject } from '@angular/core/testing';

import { SevenpcNolifeNoutilsService } from './sevenpc-nolife-noutils.service';

describe('SevenpcNolifeNoutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenpcNolifeNoutilsService]
    });
  });

  it('should be created', inject([SevenpcNolifeNoutilsService], (service: SevenpcNolifeNoutilsService) => {
    expect(service).toBeTruthy();
  }));
});
