import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = 'http://localhost:8080/api/pedido';

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.API}/${id}`);
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.API, pedido);
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(`${this.API}/${pedido.id}`, pedido);
  }

  excluir(id: number): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(`${this.API}/${id}`);
  }
}
