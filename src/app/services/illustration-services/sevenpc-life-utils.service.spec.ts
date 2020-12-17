import { TestBed, inject } from '@angular/core/testing';

import { SevenpcLifeUtilsService } from './sevenpc-life-utils.service';

describe('SevenpcLifeUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenpcLifeUtilsService]
    });
  });

  it('should be created', inject([SevenpcLifeUtilsService], (service: SevenpcLifeUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
