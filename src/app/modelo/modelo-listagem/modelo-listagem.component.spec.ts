import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloListagemComponent } from './modelo-listagem.component';

describe('ModeloListagemComponent', () => {
  let component: ModeloListagemComponent;
  let fixture: ComponentFixture<ModeloListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeloListagemComponent]
    });
    fixture = TestBed.createComponent(ModeloListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
