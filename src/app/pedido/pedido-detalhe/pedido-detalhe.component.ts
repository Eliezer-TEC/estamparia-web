import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camisa } from 'src/app/shared/model/camisa';
import { Modelo } from 'src/app/shared/model/modelo';
import { Pedido } from 'src/app/shared/model/pedido';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { ModeloService } from 'src/app/shared/service/modelo.service';
import { PedidoService } from 'src/app/shared/service/pedido.service';
import { PessoaService } from 'src/app/shared/service/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.scss'],
})
export class PedidoDetalheComponent {
  public idPedido: number;
  public modelo = Modelo;
  public pedido: Pedido = new Pedido();
  public pessoas: Pessoa[] = [];
  public camisa: Camisa = new Camisa();
  public modelos: Modelo[] = [];


  constructor(
    private pedidoService: PedidoService,
    private pessoaService: PessoaService,
    private modeloService: ModeloService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public cadastrar(form: NgForm) {
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
    this.router.navigate(['/pedido/lista']);
  }
  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
