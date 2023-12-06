import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListagemComponent } from './pedido-listagem/pedido-listagem.component';

const routes: Routes = [
  {path: 'lista', component: PedidoListagemComponent},
  {path: 'detalhe', component: PedidoListagemComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
