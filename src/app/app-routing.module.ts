import { ServicoComponent } from './servico/servico.component';
import { BarbeiroComponent } from './barbeiro/barbeiro.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TurnoTrabalhoComponent } from './turno-trabalho/turno-trabalho.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/turnoTrabalho', pathMatch: 'full' },
  { path: 'cliente', component: ClienteComponent },
  { path: 'barbeiro', component: BarbeiroComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'turnoTrabalho', component: TurnoTrabalhoComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
