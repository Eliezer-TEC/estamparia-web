import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'pessoa',
    loadChildren:() => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: 'endereco',
    loadChildren:() => import('./endereco/endereco.module').then(m => m.EnderecoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
