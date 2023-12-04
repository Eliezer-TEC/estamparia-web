import {Pessoa} from './pessoa';
export class Pedido {
  id: number;
  idPessoa: Pessoa;
  idCamisa: number;
  idEndereco: number;
  total: number;
  status: string;
  quantidade: number;
}
