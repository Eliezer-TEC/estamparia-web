import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { PessoaSeletor } from 'src/app/shared/model/seletor/pessoa.seletor';
import Swal from 'sweetalert2';
import { PessoaService } from '../../shared/service/pessoa.service';


@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.scss']
})
export class PessoaListagemComponent {
  public pessoa: Array<Pessoa> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();

  constructor(private pessoaService: PessoaService,
              private router: Router,
              private route: ActivatedRoute){

  }

  // ngOnInit(): void {
  //   //Similar ao método main() do Java
  //   this.buscarPessoa();
  // }

  pesquisar(){
    this.pessoaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.pessoa = resultado;
      },
      erro => {
        console.log('Erro ao buscar a pessoa', erro)
      }
    );
  }

  limpar(){
    this.seletor = new PessoaSeletor();
  }

  editar(id:number){
    this.router.navigate(['/pessoa/detalhe', ])
  }


  buscarPessoa(){
    this.pessoaService.listarTodos().subscribe(
      resultado => {
        this.pessoa = resultado;
      },
      erro => {
        console.log('Erro ao buscar os usuários', erro);
      }
    );
  }

  excluir(id: number){
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Deseja excluir o produto #" + id + "?",
      icon: 'warning',
      showCancelButton: true,
    }).then((retorno) => {
      if(retorno.isConfirmed){
        this.pessoaService.excluir(id).subscribe(
          sucesso => {
            Swal.fire("Sucesso", "Produto excluído com sucesso!", 'success');
            this.buscarPessoa(); //Atualiza a listagem
          },
          erro => {
            Swal.fire("Erro", "Erro ao excluir o produto: " + erro, 'error');
          }
        );
      }
    }
    );
  }
}
