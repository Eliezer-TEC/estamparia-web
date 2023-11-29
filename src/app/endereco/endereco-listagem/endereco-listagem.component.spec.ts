import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoListagemComponent } from './endereco-listagem.component';

describe('EnderecoListagemComponent', () => {
  let component: EnderecoListagemComponent;
  let fixture: ComponentFixture<EnderecoListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoListagemComponent]
    });
    fixture = TestBed.createComponent(EnderecoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
