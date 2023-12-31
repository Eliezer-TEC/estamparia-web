import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';
import { PedidoSeletor } from '../model/seletor/pedido.seletor';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = 'http://localhost:8080/api/pedido';

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Array<Pedido>> {
    return this.httpClient.get<Array<Pedido>>(this.API + "/todos");
  }

  listarComSeletor(seletor: PedidoSeletor){
    return this.httpClient.post<Array<Pedido>>(this.API + "/filtro", seletor);
  }


  buscarPorId(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.API + '/' + id);
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.API + "/cadastrar", pedido);
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(this.API +'/atualizar', pedido);
  }

  excluir(id: number): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(`${this.API}/${id}`);
  }
}
