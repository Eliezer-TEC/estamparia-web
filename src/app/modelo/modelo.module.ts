import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloRoutingModule } from './modelo-routing.module';
import { ModeloListagemComponent } from './modelo-listagem/modelo-listagem.component';
import { ModeloDetalheComponent } from './modelo-detalhe/modelo-detalhe.component';


@NgModule({
  declarations: [
    ModeloListagemComponent,
    ModeloDetalheComponent
  ],
  imports: [
    CommonModule,
    ModeloRoutingModule
  ]
})
export class ModeloModule { }
