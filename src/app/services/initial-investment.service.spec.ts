import { TestBed, inject } from '@angular/core/testing';

import { InitialInvestmentDataService } from './initial-investment.service';

describe('L4lDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialInvestmentDataService]
    });
  });

  it('should be created', inject([InitialInvestmentDataService], (service: InitialInvestmentDataService) => {
    expect(service).toBeTruthy();
  }));
});
