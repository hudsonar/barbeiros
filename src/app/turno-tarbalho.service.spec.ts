import { TestBed, inject } from '@angular/core/testing';

import { TurnoTarbalhoService } from './turno-tarbalho.service';

describe('TurnoTarbalhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurnoTarbalhoService]
    });
  });

  it('should be created', inject([TurnoTarbalhoService], (service: TurnoTarbalhoService) => {
    expect(service).toBeTruthy();
  }));
});
