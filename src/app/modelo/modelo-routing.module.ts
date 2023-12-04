import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloDetalheComponent } from './modelo-detalhe/modelo-detalhe.component';
import { ModeloListagemComponent } from './modelo-listagem/modelo-listagem.component';

const routes: Routes = [
  {path: 'detalhe/:id', component: ModeloDetalheComponent},
  {path: 'detalhe', component: ModeloDetalheComponent},
  {path: 'lista', component: ModeloListagemComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloRoutingModule { }
