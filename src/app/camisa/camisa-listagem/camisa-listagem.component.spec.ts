import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaListagemComponent } from './camisa-listagem.component';

describe('CamisaListagemComponent', () => {
  let component: CamisaListagemComponent;
  let fixture: ComponentFixture<CamisaListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamisaListagemComponent]
    });
    fixture = TestBed.createComponent(CamisaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
