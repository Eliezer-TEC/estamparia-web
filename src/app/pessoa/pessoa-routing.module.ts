import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';

const routes: Routes = [

  {path: 'detalhe/:id', component: PessoaDetalheComponent},
  {path: 'detalhe', component: PessoaDetalheComponent},
  {path: 'lista', component: PessoaListagemComponent},
  {path: 'lista/:nome', component: PessoaListagemComponent},
  {path: 'lista/funcionario', component: PessoaListagemComponent},
  {path: 'lista/todos', component: PessoaListagemComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
