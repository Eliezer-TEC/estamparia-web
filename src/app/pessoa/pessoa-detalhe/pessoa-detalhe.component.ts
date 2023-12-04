import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared/model/endereco';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { PessoaService } from 'src/app/shared/service/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent {





  public idPessoa: number;
  public pessoa: Pessoa = new Pessoa();
  public endereco: Endereco = new Endereco();
ngForm: NgForm;

  constructor(private pessoaService: PessoaService,
    private router: Router){

    }

  cadastrar(form: NgForm){


  }


  inserirEndereco(){
    this.pessoaService.salvar(this.pessoa).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Usuário cadastrado!", 'success');
        this.pessoa = new Pessoa();
      },
      erro => {
        Swal.fire("Erro", "Erro ao cadastrar o Usuário: " + erro, 'error');
      }
    );
  }
}
