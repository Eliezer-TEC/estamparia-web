import { Modelo } from './../model/modelo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSeletor } from '../model/seletor/modelo.seletor';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private readonly API = 'http://localhost:8080/api/modelo';

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Modelo> {
    return this.httpClient.get<Modelo>(`${this.API}/${id}`);
  }

  atualizar(modelo: Modelo): Observable<Modelo> {
    return this.httpClient.put<Modelo>(this.API, modelo);
  }
  salvar(novoModelo: Modelo): Observable<Modelo> {
    return this.httpClient.post<Modelo>(this.API + '/cadastrar', novoModelo); // NO CORPO DO JSON
  }
  excluir(id: number): Observable<Modelo> {
    return this.httpClient.delete<Modelo>(this.API + '/' + id);  //NA PRÓPRIA URL
  }

  listarTodos(): Observable<Array<Modelo>> {
    return this.httpClient.get<Array<Modelo>>(this.API + "/todos");
  }

  listarComSeletor(seletor: ModeloSeletor){
    return this.httpClient.post<Array<Modelo>>(this.API + "/filtro", seletor);
  }


  pesquisarPorId(id: number): Observable<Modelo> {
    return this.httpClient.get<Modelo>(this.API + '/' + id);
  }

}
