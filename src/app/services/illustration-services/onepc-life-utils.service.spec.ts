import { TestBed, inject } from '@angular/core/testing';

import { OnepcLifeUtilsService } from './onepc-life-utils.service';

describe('OnepcLifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnepcLifeUtilsService]
    });
  });

  it('should be created', inject([OnepcLifeUtilsService], (service: OnepcLifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
