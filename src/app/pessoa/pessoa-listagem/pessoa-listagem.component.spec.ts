import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListagemComponent } from './pessoa-listagem.component';

describe('PessoaListagemComponent', () => {
  let component: PessoaListagemComponent;
  let fixture: ComponentFixture<PessoaListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaListagemComponent]
    });
    fixture = TestBed.createComponent(PessoaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
