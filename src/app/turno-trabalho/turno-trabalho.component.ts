import { Component, OnInit } from '@angular/core';
import { TurnoTrabalho } from '../shared/turnoTrabalho';
import { HttpClient } from '@angular/common/http';
import { TurnoTarbalhoService } from '../turno-tarbalho.service';

@Component({
  selector: 'app-turno-trabalho',
  templateUrl: './turno-trabalho.component.html',
  styleUrls: ['./turno-trabalho.component.scss']
})
export class TurnoTrabalhoComponent implements OnInit {
  turnoTrabalho: TurnoTrabalho = new TurnoTrabalho();
  turnos: TurnoTrabalho[];
  txtDataInico: string;
  txtDataFim: string;
   edicao = false;
   insercao = false;
   pesquisa = true;
  columns = [
     {
      title: 'ID'
    },
     {
      title: 'Descrição'
    },
     {
      title: 'Hora Inicio'
    },
     {
      title: 'Hora Fim'
    }
  ];
  constructor(http: HttpClient,  private turnoTrabalhoService: TurnoTarbalhoService) {
    this.getTurnos();
  }

  ngOnInit() {
  }

  getTurnos() {
    this.turnoTrabalhoService.getTurnos().subscribe(turnos => {
      this.turnos = turnos;
    });
  }
  save() {
      const dateBegin = '1968-11-16T' + this.getTimeStringFormat(this.txtDataInico);
      console.log(dateBegin);
      const dateFinal = '1968-11-16T' + this.getTimeStringFormat(this.txtDataFim);
      console.log(dateFinal);
      this.turnoTrabalho.horaInicio = new Date(dateBegin);
      this.turnoTrabalho.horaFim = new Date(dateFinal);
      console.log(JSON.stringify(this.turnoTrabalho));
      if (!this.edicao) {
        this.turnoTrabalhoService.save(this.turnoTrabalho).subscribe(turno => {
          this.getTurnos();
        });
      } else {
        this.turnoTrabalhoService.atualizar(this.turnoTrabalho).subscribe(turno => {
          this.getTurnos();
        });
      }
  }

  pesquisar() {
  }

  apagar(turnoEscolhido: TurnoTrabalho) {
    this.turnoTrabalhoService.apagar(turnoEscolhido).subscribe(turno => {
      this.getTurnos();
    });
  }

  cancelar() {
    this.edicao = false;
    this.pesquisa = true;
    this.insercao = false;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.turnoTrabalho = new TurnoTrabalho();
  }

  novo() {
    this.edicao = false;
    this.pesquisa = false;
    this.insercao = true;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.turnoTrabalho = new TurnoTrabalho();
  }
  teste() {
    console.log(JSON.stringify(this.turnoTrabalho));
  }
  getTimeStringFormat(data: string): string {
    return data.substring(0, 2) + ':' + data.substring(2, 4) + ':00';
  }

  editar(turnoEscolhido: TurnoTrabalho) {
    console.log(JSON.stringify(turnoEscolhido));
    this.txtDataInico = turnoEscolhido.horaInicio.toString();
    this.txtDataFim = turnoEscolhido.horaFim.toString();
    this.turnoTrabalho = turnoEscolhido;
    this.edicao = true;
    this.pesquisa = false;
    this.insercao = false;
    }

}
