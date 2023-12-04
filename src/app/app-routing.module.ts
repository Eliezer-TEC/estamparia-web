import { PedidoModule } from './pedido/pedido.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "listagem", redirectTo: "pessoa/lista", pathMatch: "full"},
  {path: "cadastro", redirectTo: "pessoa/cadastrar", pathMatch: "full"},
  {path: "lista", redirectTo: "pedido/lista", pathMatch: "full"},


  {
    path: 'pessoa',
    loadChildren:() => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },


    {
      path: 'pedido',
    loadChildren:() => import('./pedido/pedido.module').then(m => m.PedidoModule)

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
