import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: NbMenuItem[] = [{ title: 'Principal', link: '/' }, {  title: 'Cadastro',
  expanded: true,
  children: [
    {title: 'Turno de Trabalho', link: '/turnoTrabalho' },
    {title: 'Barbeiro', link: '/barbeiro' },
    {title: 'Cliente', link: '/cliente' },
    // {title: 'servico', link: '/servico' }
  ]},  {  title: 'Operação',
  expanded: true,
  children: [
    {title: 'Atendimento', link: '/atendimento' }
  ]} ];
  title = 'app';
  constructor(private sidebarService: NbSidebarService) {
  }
  toggle() {
    this.sidebarService.toggle(true, 'left');

  }
}
