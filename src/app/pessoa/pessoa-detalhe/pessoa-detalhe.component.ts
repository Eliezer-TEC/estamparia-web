import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared/model/endereco';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { PessoaService } from 'src/app/shared/service/pessoa.service';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent {





  public idPessoa: number;
  public pessoa: Pessoa = new Pessoa();
  public endereco: Endereco = new Endereco();

  constructor(private pessoaService: PessoaService,
    private router: Router){

    }

  enderecoCadastrar(){
    this.router.navigate(['/endereco/detalhe', ])

  }
}
