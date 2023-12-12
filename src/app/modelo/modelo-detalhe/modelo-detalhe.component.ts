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
  ) { }

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

  public cadastrar(form: NgForm) {
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

  atualizarModelo(){
    //é EDIÇÃO
    this.modeloService.atualizar(this.modelo).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Modelo atualizado!", 'success');
        this.modelo = new Modelo();
      },
      erro => {
        Swal.fire("Erro", "Erro ao atualizar o Modelo: " + erro, 'error');
      }
    );
  }


  inserirModelo(){
    //é CADASTRO
    this.modeloService.salvar(this.modelo).subscribe(
      sucesso => {

        Swal.fire("Sucesso", "Modelo cadastrado!", 'success');
        this.modelo = new Modelo();
      },
      erro => {
        Swal.fire("Erro", "Erro ao cadastrar o Modelo: " + erro, 'error');
      }
    );
  }

  public voltar() {
    this.router.navigate(['']);

  }
}




