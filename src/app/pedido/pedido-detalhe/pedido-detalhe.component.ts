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
  public estampa: File[] = [];
  // public camisa: Camisa = new Camisa();
  // files: File[] = [];

  public modelos: Modelo[] = [];
  public pessoas: Pessoa[] = [];



  constructor(
    private pedidoService: PedidoService,
    private pessoaService: PessoaService,
    private modeloService: ModeloService,
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
    this.pessoaService.listarTodos().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar os usuários: " + erro, 'error');
      }
    );

    this.modeloService.listarTodos().subscribe(
      resultado => {
        this.modelos = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar os modelos: " + erro, 'error');
      }
    );

  }

  selecionarEstampa(event: any): void {
    const mimeType = event.target.files[0].type;
    // this.estampa = event.target.files[0];
    if (mimeType.match(/image\/*/) == null) {
      alert('Apenas imagens são suportados');
      return;
    }

    this.estampa = event.target.files;
  }

  buscarPedido() {
    this.pedidoService.buscarPorId(this.idPedido).subscribe(
      (resultado) => {
        this.pedido = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar modelo com ID (' + this.idPedido + ') : ' + erro,
          'error'
        );
      }
    );
  }

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
  }
  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
