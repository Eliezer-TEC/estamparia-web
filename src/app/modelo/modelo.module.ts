import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloRoutingModule } from './modelo-routing.module';
import { ModeloListagemComponent } from './modelo-listagem/modelo-listagem.component';
import { ModeloDetalheComponent } from './modelo-detalhe/modelo-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModeloListagemComponent, ModeloDetalheComponent],
  imports: [CommonModule,
    FormsModule,
     ModeloRoutingModule],
})
export class ModeloModule {}
