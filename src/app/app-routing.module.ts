import { PedidoModule } from './pedido/pedido.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "listagem", redirectTo: "pessoa/lista", pathMatch: "full"},
  {path: "cadastro", redirectTo: "pessoa/cadastrar", pathMatch: "full"},
  {path: "listagem", redirectTo: "pedido/lista", pathMatch: "full"},
  {path: "cadastro", redirectTo: "pedido/cadastrar", pathMatch: "full"},
  {path: "modelo", redirectTo: "modelo/cadastrar", pathMatch: "full"},
  {path: "modelo", redirectTo: "modelo/lista", pathMatch: "full"},




  {
    path: 'pessoa',
    loadChildren:() => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },


    {
      path: 'pedido',
    loadChildren:() => import('./pedido/pedido.module').then(m => m.PedidoModule)

    },

    {
      path: 'modelo',
    loadChildren:() => import('./modelo/modelo.module').then(m => m.ModeloModule)

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
