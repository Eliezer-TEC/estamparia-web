import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListagemComponent } from './pedido-listagem.component';

describe('PedidoListagemComponent', () => {
  let component: PedidoListagemComponent;
  let fixture: ComponentFixture<PedidoListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoListagemComponent]
    });
    fixture = TestBed.createComponent(PedidoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
