import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamisaRoutingModule } from './camisa-routing.module';
import { CamisaListagemComponent } from './camisa-listagem/camisa-listagem.component';
import { CamisaDetalheComponent } from './camisa-detalhe/camisa-detalhe.component';


@NgModule({
  declarations: [
    CamisaListagemComponent,
    CamisaDetalheComponent
  ],
  imports: [
    CommonModule,
    CamisaRoutingModule
  ]
})
export class CamisaModule { }
