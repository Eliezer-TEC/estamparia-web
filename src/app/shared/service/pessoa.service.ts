import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PessoaSeletor } from '../model/seletor/produto.seletor';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:8080/api/pessoa';
  private readonly APIe = 'http://localhost:8080/api/endereco';
  constructor(private httpClient: HttpClient) { }


  listarTodos(): Observable<Array<Pessoa>> {//com retorno EXPLÍCITO(Observable<Array<Produto>>)
    return this.httpClient.get<Array<Pessoa>>(this.API);
  }

  listarComSeletor(seletor: PessoaSeletor){ //com retorno IMPLÍCITO
    return this.httpClient.post<Array<Pessoa>>(this.API + "/filtro", seletor);
  }


  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.API, pessoa);
  }

  salvarEndereco(endereco : Endereco): Observable<Endereco>{
    return this.httpClient.post<Endereco> (this.APIe, endereco);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.put<Pessoa>(this.API, pessoa);
  }

  pesquisarPorId(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.API + '/' + id);
  }

  excluir(id: number): Observable<Pessoa> {
    return this.httpClient.delete<Pessoa>(this.API + '/' + id);
  }



}
