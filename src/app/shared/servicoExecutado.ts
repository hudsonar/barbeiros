import { TurnoTrabalho } from './turnoTrabalho';
import { Barbeiro } from './barbeiro';
import { Cliente } from './cliente';
import { Servico } from './servico';
export class ServicoExecutado {
  id: number;
  servico: Servico;
  cliente: Cliente;
  barbeiro: Barbeiro;
  TurnoTrabalho: TurnoTrabalho;
  materialTrabalho: string;
  tempoServico: number;
  dataServico: Date;
  precoPago: string;
}
