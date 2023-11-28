import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetalheComponent } from './pessoa-detalhe.component';

describe('PessoaDetalheComponent', () => {
  let component: PessoaDetalheComponent;
  let fixture: ComponentFixture<PessoaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaDetalheComponent]
    });
    fixture = TestBed.createComponent(PessoaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
