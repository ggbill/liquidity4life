import { TestBed, inject } from '@angular/core/testing';

import { SevenpcNolifeUtilsService } from './sevenpc-nolife-utils.service';

describe('SevenpcNolifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenpcNolifeUtilsService]
    });
  });

  it('should be created', inject([SevenpcNolifeUtilsService], (service: SevenpcNolifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
