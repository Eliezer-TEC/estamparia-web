import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListagemComponent } from './pedido-listagem/pedido-listagem.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';

const routes: Routes = [
  {path: 'lista', component: PedidoListagemComponent},
  {path: 'detalhe', component: PedidoDetalheComponent},
  {path: 'detalhe/:id', component: PedidoDetalheComponent},
  {path: 'lista/todos', component: PedidoListagemComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
