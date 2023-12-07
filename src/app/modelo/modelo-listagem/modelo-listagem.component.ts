import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModeloSeletor } from 'src/app/shared/model/seletor/modelo.seletor';
import { ModeloService } from '../../shared/service/modelo.service';
import { Modelo } from 'src/app/shared/model/modelo';

@Component({
  selector: 'app-modelo-listagem',
  templateUrl: './modelo-listagem.component.html',
  styleUrls: ['./modelo-listagem.component.scss']
})
export class ModeloListagemComponent {
  public pedido: Array<Modelo> = new Array();
  public seletor: ModeloSeletor = new ModeloSeletor();
  public modelo: Modelo[] = [];

  constructor(private modeloService: ModeloService,
  private router: Router){


}
listarComSeletor(){
  this.modeloService.listarComSeletor(this.seletor).subscribe(
    resultado => {
      this.modelo = resultado;
    },
    erro => {
      console.log('Erro ao buscar produtos', erro)
    }
  );
}

limpar(){
  this.seletor = new ModeloSeletor();
}

editar(id:number){
  this.router.navigate(['/modelo/detalhe', ])

}

buscarModelo(){
  this.modeloService.listarTodos().subscribe(
    resultado => {
      this.pedido = resultado;
    },
    erro => {
      console.log('Erro ao buscar os modelos', erro);
    }
  );
}


excluir(id: number){

  Swal.fire({
    title: 'Você tem certeza disso?',
    text: "Deseja excluir o modelo #" + id + "?",
    icon: 'warning',
    showCancelButton: true,
  }).then((retorno) => {
    if(retorno.isConfirmed){
       this.modeloService.excluir(id).subscribe(
         sucesso => {
           Swal.fire("Sucesso", "Modelo excluído com sucesso!", 'success');
           this.buscarModelo(); //Atualiza a listagem
         },
         erro => {
           Swal.fire("Erro", "Erro ao excluir o modelo: " + erro, 'error');
         }
       );
    }
  }
  );
}

}
