import { ServicoService } from './../servico.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from '../shared/servico';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {
  servico: Servico = new Servico();
  servicos: Servico[];
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
      title: 'Tempo'
    },
    {
      title: 'Preço'
    }
  ];
  constructor(http: HttpClient, private servicoService: ServicoService) {
    this.getServicos();
  }

  ngOnInit() {
  }

  getServicos() {
    this.servicoService.getTurnos().subscribe(servicos => {
      this.servicos = servicos;
    });
  }
  save() {
    console.log(JSON.stringify(this.servico));
    if (!this.edicao) {
      this.servicoService.save(this.servico).subscribe(turno => {
        this.getServicos();
      });
    } else {
      this.servicoService.atualizar(this.servico).subscribe(turno => {
        this.getServicos();
      });
    }
  }

  pesquisar() {
  }

  apagar(turnoEscolhido: Servico) {
    this.servicoService.apagar(turnoEscolhido).subscribe(turno => {
      this.getServicos();
    });
  }

  cancelar() {
    this.edicao = false;
    this.pesquisa = true;
    this.insercao = false;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.servico = new Servico();
  }

  novo() {
    this.edicao = false;
    this.pesquisa = false;
    this.insercao = true;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.servico = new Servico();
  }
  teste() {
    console.log(JSON.stringify(this.servico));
  }

  editar(turnoEscolhido: Servico) {
    console.log(JSON.stringify(turnoEscolhido));
    this.servico = turnoEscolhido;
    this.edicao = true;
    this.pesquisa = false;
    this.insercao = false;
  }

}
