import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  clientes: Cliente[];
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
      title: 'Nome'
    },
    {
      title: 'Telefone'
    },
    {
      title: 'Email'
    }
  ];
  constructor(http: HttpClient, private clienteService: ClienteService) {
    this.getClientes();
  }

  ngOnInit() {
  }

  getClientes() {
    this.clienteService.getTurnos().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
  save() {
    console.log(JSON.stringify(this.cliente));
    if (!this.edicao) {
      this.clienteService.save(this.cliente).subscribe(turno => {
        this.getClientes();
      });
    } else {
      this.clienteService.atualizar(this.cliente).subscribe(turno => {
        this.getClientes();
      });
    }
  }

  pesquisar() {
  }

  apagar(turnoEscolhido: Cliente) {
    this.clienteService.apagar(turnoEscolhido).subscribe(turno => {
      this.getClientes();
    });
  }

  cancelar() {
    this.edicao = false;
    this.pesquisa = true;
    this.insercao = false;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.cliente = new Cliente();
  }

  novo() {
    this.edicao = false;
    this.pesquisa = false;
    this.insercao = true;
    this.txtDataFim = '';
    this.txtDataInico = '';
    this.cliente = new Cliente();
  }
  teste() {
    console.log(JSON.stringify(this.cliente));
  }

  editar(turnoEscolhido: Cliente) {
    console.log(JSON.stringify(turnoEscolhido));
    this.cliente = turnoEscolhido;
    this.edicao = true;
    this.pesquisa = false;
    this.insercao = false;
  }

}
