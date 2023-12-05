import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'src/app/shared/model/modelo';
import { ModeloService } from 'src/app/shared/service/modelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modelo-detalhe',
  templateUrl: './modelo-detalhe.component.html',
  styleUrls: ['./modelo-detalhe.component.scss']
})
export class ModeloDetalheComponent {
[x: string]: any;
  public idModelo: number;
  public modelo: Modelo = new Modelo();

constructor(
    private modeloService: ModeloService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idModelo = params['id'];
      if (this.idModelo) {
        this.buscarModelo();
      }
    });
  }
  buscarModelo() {
    this.modeloService.buscarPorId(this.idModelo).subscribe(
      (resultado) => {
        this.modelo = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar modelo com ID (' + this.idModelo + ') : ' + erro,
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

    if (this.idModelo) {
      this.atualizarModelo();
    } else {
      this.inserirModelo();
    }
  }
  inserirModelo() {
    this.modeloService.salvar(this.modelo).subscribe(
      () => {
        Swal.fire('Sucesso', 'Pedido salvo com sucesso', 'success');
        this.modelo = new Modelo();
      },
      (erro) => {
        Swal.fire('Erro', 'Não foi possível salvar o pedido: ' + erro, 'error');
      }
    );
  }
  atualizarModelo() {
    this.modeloService.atualizar(this.modelo).subscribe(
      () => {
        Swal.fire('Sucesso', 'Pedido atualizado com sucesso', 'success');
      },
      (erro) => {
        Swal.fire('Erro', 'Não foi possível atualizar o pedido: ' + erro, 'error');
      }
    );
  }
}




