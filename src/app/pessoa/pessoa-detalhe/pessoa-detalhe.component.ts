import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PessoaService } from '../../shared/service/pessoa.service';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { Endereco } from 'src/app/shared/model/endereco';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent {


  public idPessoa: number;
  public pessoa: Pessoa = new Pessoa();
  public endereco: Endereco = new Endereco();

  constructor(private PessoaService: PessoaService,
    private router: Router){

    }

  enderecoCadastrar(){
    this.router.navigate(['/endereco/detalhe', ])

  }
}
