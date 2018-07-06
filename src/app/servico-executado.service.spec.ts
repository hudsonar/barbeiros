import { TestBed, inject } from '@angular/core/testing';

import { ServicoExecutadoService } from './servico-executado.service';

describe('ServicoExecutadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoExecutadoService]
    });
  });

  it('should be created', inject([ServicoExecutadoService], (service: ServicoExecutadoService) => {
    expect(service).toBeTruthy();
  }));
});
