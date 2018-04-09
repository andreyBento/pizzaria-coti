import { TestBed, inject } from '@angular/core/testing';

import { AddToDomService } from './add-to-dom.service';

describe('AddToDomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToDomService]
    });
  });

  it('should be created', inject([AddToDomService], (service: AddToDomService) => {
    expect(service).toBeTruthy();
  }));
});
