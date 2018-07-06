import { TurnoTarbalhoService } from './../turno-tarbalho.service';
import { TurnoTrabalho } from './../shared/turnoTrabalho';
import { BarbeiroService } from './../barbeiro.service';
import { Component, OnInit } from '@angular/core';
import { Barbeiro } from '../shared/barbeiro';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-barbeiro',
  templateUrl: './barbeiro.component.html',
  styleUrls: ['./barbeiro.component.scss']
})
export class BarbeiroComponent implements OnInit {
  barbeiro: Barbeiro = new Barbeiro();
  barbeiros: Barbeiro[];
  turnos: TurnoTrabalho[];
  txtDataInico: string;
  txtDataFim: string;
  idTurnoTrabalho: number;
  edicao = false;
  insercao = false;
  pesquisa = true;
  columns = [
    {
      title: 'ID'
    },
    {
      title: 'Nome'
    },
    {
      title: 'Telefone'
    },
    {
      title: 'Email'
    },
    {
      title: 'Material Trabalho'
    },
    {
      title: 'Turno Trabalho'
    }
  ];
  constructor(http: HttpClient, private barbeiroService: BarbeiroService, private turnoTrabalhoService: TurnoTarbalhoService) {
    this.getBarbeiros();
  }

  ngOnInit() {
    this.getTurnos();
  }

  getBarbeiros() {
    this.barbeiroService.getBarbeiros().subscribe(barbeiros => {
      this.barbeiros = barbeiros;
    });
  }
  save() {
    console.log(JSON.stringify(this.barbeiro));
    this.barbeiro.turnoTrabalho = new TurnoTrabalho();
    this.barbeiro.turnoTrabalho.id = this.idTurnoTrabalho;
    if (!this.edicao) {
      this.barbeiroService.save(this.barbeiro).subscribe(turno => {
        this.getBarbeiros();
      });
    } else {
      this.barbeiroService.atualizar(this.barbeiro).subscribe(turno => {
        this.getBarbeiros();
      });
    }
  }

  pesquisar() {
  }
  getTurnos() {
    this.turnoTrabalhoService.getTurnos().subscribe(turnos => {
      this.turnos = turnos;
    });
  }

  apagar(turnoEscolhido: Barbeiro) {
    this.barbeiroService.apagar(turnoEscolhido).subscribe(turno => {
      this.getBarbeiros();
    });
  }

  cancelar() {
    this.edicao = false;
    this.pesquisa = true;
    this.insercao = false;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.idTurnoTrabalho = undefined;
    this.barbeiro = new Barbeiro();
  }

  novo() {
    this.edicao = false;
    this.pesquisa = false;
    this.insercao = true;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.idTurnoTrabalho = undefined;
    this.barbeiro = new Barbeiro();
  }
  teste() {
    console.log(JSON.stringify(this.barbeiro));
  }

  editar(barbeiroEscolhido: Barbeiro) {
    console.log(JSON.stringify(barbeiroEscolhido));
    this.barbeiro = barbeiroEscolhido;
    this.idTurnoTrabalho = this.barbeiro.turnoTrabalho.id;
    this.edicao = true;
    this.pesquisa = false;
    this.insercao = false;
  }

}
