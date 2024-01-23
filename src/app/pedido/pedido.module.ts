import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoListagemComponent } from './pedido-listagem/pedido-listagem.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { FileDisplayPipe } from './pedido-detalhe/file-display.pipe';


@NgModule({
  declarations: [
    PedidoListagemComponent,
    PedidoDetalheComponent,
    FileDisplayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
