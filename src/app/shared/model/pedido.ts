import { Camisa } from './camisa';
import {Pessoa} from './pessoa';
export class Pedido {
  id: number;
  idPessoa: Pessoa;
  camisa: Camisa = new Camisa();
  total: number;
  status: string;
  quantidade: number;
}
