import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoSeletor } from './../../shared/model/seletor/pedido.seletor';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/shared/service/pedido.service';
import { Pessoa } from 'src/app/shared/model/pessoa';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pedido-listagem',
  templateUrl: './pedido-listagem.component.html',
  styleUrls: ['./pedido-listagem.component.scss']
})
export class PedidoListagemComponent {
  public pedido: Array<Pedido> = new Array();
  public seletor: PedidoSeletor = new PedidoSeletor();
  public pessoa: Pessoa[] = [];

  constructor(private pedidoService: PedidoService,
  private router: Router){


}
pesquisar(){
  this.pedidoService.listarComSeletor(this.seletor).subscribe(
    resultado => {
      this.pedido = resultado;
    },
    erro => {
      console.log('Erro ao buscar pedidos', erro)
    }
  );
}

limpar(){
  this.seletor = new PedidoSeletor();
}

editar(id:number){
  this.router.navigate(['/pessoa/detalhe', id])

}


buscarPedido(){
  this.pedidoService.listarTodos().subscribe(
    resultado => {
      this.pedido = resultado;
    },
    erro => {
      console.log('Erro ao buscar pedidos', erro);
    }
  );
}


excluir(id: number){

  Swal.fire({
    title: 'Você tem certeza disso?',
    text: "Deseja excluir o pedido #" + id + "?",
    icon: 'warning',
    showCancelButton: true,
  }).then((retorno) => {
    if(retorno.isConfirmed){
       this.pedidoService.excluir(id).subscribe(
         sucesso => {
           Swal.fire("Sucesso", "Pedido excluído com sucesso!", 'success');
           this.buscarPedido(); //Atualiza a listagem
         },
         erro => {
           Swal.fire("Erro", "Erro ao excluir o pedido: " + erro, 'error');
         }
       );
    }
  }
  );
}

}
