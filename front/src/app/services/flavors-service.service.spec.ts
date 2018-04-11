import { TestBed, inject } from '@angular/core/testing';

import { FlavorsServiceService } from './flavors-service.service';

describe('FlavorsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlavorsServiceService]
    });
  });

  it('should be created', inject([FlavorsServiceService], (service: FlavorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
