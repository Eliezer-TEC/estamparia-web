import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoSeletor } from './../../shared/model/seletor/pedido.seletor';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/shared/service/pedido.service';

@Component({
  selector: 'app-pedido-listagem',
  templateUrl: './pedido-listagem.component.html',
  styleUrls: ['./pedido-listagem.component.scss']
})
export class PedidoListagemComponent {
  public pedido: Array<Pedido> = new Array();
  public seletor: PedidoSeletor = new PedidoSeletor();

  constructor(private pedidoService: PedidoService,
  private router: Router){


}
pesquisar(){

}

limpar(){

}

editar(id:number){

}

excluir(id:number){

}
}
