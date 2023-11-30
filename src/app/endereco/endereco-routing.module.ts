import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoDetalheComponent } from './endereco-detalhe/endereco-detalhe.component';
import { EnderecoListagemComponent } from './endereco-listagem/endereco-listagem.component';

const routes: Routes = [
  {path: 'lista', component: EnderecoListagemComponent},
  {path: 'detalhe', component: EnderecoDetalheComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
