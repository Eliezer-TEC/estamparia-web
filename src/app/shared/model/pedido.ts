import { Modelo } from './modelo';
import {Pessoa} from './pessoa';
export class Pedido {
  id: number;
  idPessoa: number;
  total: number;
  status: string;
  quantidade: number;
  tamanho: string;
  cor: string;
  estampa: Uint8Array;
  idModelo: Modelo;
  nomeArquivo: string;

}
