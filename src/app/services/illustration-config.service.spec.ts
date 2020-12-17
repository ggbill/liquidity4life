import { TestBed, inject } from '@angular/core/testing';

import { IllustrationConfigService } from './illustration-config.service';

describe('IllustrationConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IllustrationConfigService]
    });
  });

  it('should be created', inject([IllustrationConfigService], (service: IllustrationConfigService) => {
    expect(service).toBeTruthy();
  }));
});
