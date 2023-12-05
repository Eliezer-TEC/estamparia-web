import {Endereco} from './endereco';

export class Pessoa {
  id: number;
  endereco: Endereco = new Endereco();
  nome: string;
  cpf: string;
  dtNasc: Date;
  email: string;
  ddd: string;
  telefone: string;
  senha: string;
  funcionario: boolean;
}
