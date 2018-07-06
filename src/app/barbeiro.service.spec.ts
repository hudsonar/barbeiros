import { TestBed, inject } from '@angular/core/testing';

import { BarbeiroService } from './barbeiro.service';

describe('BarbeiroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarbeiroService]
    });
  });

  it('should be created', inject([BarbeiroService], (service: BarbeiroService) => {
    expect(service).toBeTruthy();
  }));
});
