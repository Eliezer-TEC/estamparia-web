import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoDetalheComponent } from './endereco-detalhe/endereco-detalhe.component';

const routes: Routes = [
  {path: 'detalhe/:id', component: EnderecoDetalheComponent},
  {path: 'detalhe', component: EnderecoDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
