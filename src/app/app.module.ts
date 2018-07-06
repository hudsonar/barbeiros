import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbThemeModule, NbMenuModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbMenuService, NbCardModule } from '@nebular/theme';
import { TurnoTrabalhoComponent } from './turno-trabalho/turno-trabalho.component';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TurnoTarbalhoService } from './turno-tarbalho.service';
import { ClienteComponent } from './cliente/cliente.component';
import { BarbeiroComponent } from './barbeiro/barbeiro.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoExecutadoComponent } from './servico-executado/servico-executado.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnoTrabalhoComponent,
    ClienteComponent,
    BarbeiroComponent,
    ServicoComponent,
    ServicoExecutadoComponent
  ],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NgxMaskModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  providers: [NbSidebarService, NbMenuService, NbMenuInternalService, TurnoTarbalhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
