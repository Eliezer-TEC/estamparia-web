import {Pessoa} from './pessoa';
export class Pedido {
  id: number;
  pessoa: Pessoa;
  camisa: number;
  total: number;
  status: string;
  quantidade: number;
}
