import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { PessoaSeletor } from 'src/app/shared/model/seletor/produto.seletor';
import { PessoaService } from '../../shared/service/pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.scss']
})
export class PessoaListagemComponent {

  public pessoa: Array<Pessoa> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();

  constructor(private PessoaService: PessoaService,
  private router: Router){


}
pesquisar(){
  this.PessoaService.listarComSeletor(this.seletor).subscribe(
    resultado => {
      this.pessoa = resultado;
    },
    erro => {
      console.log('ERro ao buscar produtos', erro)
    }
  );
}

limpar(){
  this.seletor = new PessoaSeletor();
}

editar(){
  this.router.navigate(['/produtos/detalhe', ])

}

excluir(){
}
}
