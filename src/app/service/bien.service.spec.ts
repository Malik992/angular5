import { TestBed, inject } from '@angular/core/testing';

import { BienService } from './bien.service';

describe('BienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BienService]
    });
  });

  it('should be created', inject([BienService], (service: BienService) => {
    expect(service).toBeTruthy();
  }));
});
