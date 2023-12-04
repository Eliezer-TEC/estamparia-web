import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListagemComponent } from './pedido-listagem/pedido-listagem.component';

const routes: Routes = [
  {path: 'detalhe/:id', component: PedidoDetalheComponent},
  {path: 'detalhe', component: PedidoDetalheComponent},
  {path: 'lista', component: PedidoListagemComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
