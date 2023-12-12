import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared/model/endereco';
import { Pessoa } from 'src/app/shared/model/pessoa';
import { EnderecoService } from 'src/app/shared/service/endereco.service';
import { PessoaService } from 'src/app/shared/service/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss'],
})
export class PessoaDetalheComponent {
  public idPessoa: number;
  public pessoa: Pessoa = new Pessoa();
  public enderecos: Endereco[] = [];
  ngForm: NgForm;

  constructor(
    private pessoaService: PessoaService,
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idPessoa = params['id'];
      if (this.idPessoa) {
        this.buscarUsuarioPorId();
      }
    });

    this.enderecoService.listarTodos().subscribe(
      (resultado: Endereco[]) => {
        this.enderecos = resultado;
      },
      (erro: any) => {
        console.log('Erro ao buscar Endereço', erro);
      }
    );
  }



  buscarUsuarioPorId() {
    this.pessoaService.pesquisarPorId(this.pessoa.id).subscribe(
      (resultado) => {
        this.pessoa = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar Usuário com ID (' + this.pessoa + ') : ',
          'error'
        );
        return;
      }
    );
  }

  public cadastrar(form: NgForm) {
    if (form.invalid) {
      Swal.fire('Erro', 'Formulário inválido', 'error');
    }

    if (this.idPessoa) {
      this.atualizar();
    } else {
      this.inserirCliente();
    }
  }
  inserirCliente() {
    this.pessoaService.salvar(this.pessoa).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Usuário salvo com sucesso', 'success');
        this.pessoa = new Pessoa();
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Não foi possivel salvar o Usuário: ' + erro,
          'error'
        );
      }
    );
  }
  atualizar() {
    this.pessoaService.atualizar(this.pessoa).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Usuário Atualizado com Sucesso!', 'success');
      },
      (erro) => {
        Swal.fire('Erro', 'Não foi possivel atualizar o Usuário', 'error');
      }
    );
  }

  public voltar() {
    this.router.navigate(['pessoa/lista']);
  }
}
