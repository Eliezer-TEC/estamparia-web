import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoService } from 'src/app/shared/service/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.scss'],
})
export class PedidoDetalheComponent {
  public idPedido: number;
  public pedido: Pedido = new Pedido();

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idPedido = params['id'];
      if (this.idPedido) {
        this.buscarPedido();
      }
    });
  }

  buscarPedido() {
    this.pedidoService.buscarPorId(this.idPedido).subscribe(
      (resultado) => {
        this.pedido = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar pedido com ID (' + this.idPedido + ') : ' + erro,
          'error'
        );
      }
    );
  }

  public salvar(form: NgForm) {
    if (form.invalid) {
      Swal.fire('Erro', 'Formulário inválido', 'error');
      return;
    }

    if (this.idPedido) {
      this.atualizarPedido();
    } else {
      this.inserirPedido();
    }
  }

  inserirPedido() {
    this.pedidoService.salvar(this.pedido).subscribe(
      () => {
        Swal.fire('Sucesso', 'Pedido salvo com sucesso', 'success');
        this.pedido = new Pedido();
      },
      (erro) => {
        Swal.fire('Erro', 'Não foi possível salvar o pedido: ' + erro, 'error');
      }
    );
  }

  atualizarPedido() {
    this.pedidoService.atualizar(this.pedido).subscribe(
      () => {
        Swal.fire('Sucesso', 'Pedido atualizado com sucesso', 'success');
      },
      (erro) => {
        Swal.fire('Erro', 'Não foi possível atualizar o pedido: ' + erro, 'error');
      }
    );
  }

  public voltar() {
    this.router.navigate(['/pedido']);
  }
}
