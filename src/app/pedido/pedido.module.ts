import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoListagemComponent } from './pedido-listagem/pedido-listagem.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidoListagemComponent,
    PedidoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
