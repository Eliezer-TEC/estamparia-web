import { Modelo } from './../model/modelo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private readonly API = 'http://localhost:8080/api/modelo';

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Modelo> {
    return this.httpClient.get<Modelo>(`${this.API}/${id}`);
  }

  atualizar(Modelo: Modelo): Observable<Modelo> {
    return this.httpClient.put<Modelo>(this.API, Modelo);
  }

  salvar(pessoa: Modelo): Observable<Modelo> {
    return this.httpClient.post<Modelo>(this.API, Modelo);
  }
}
