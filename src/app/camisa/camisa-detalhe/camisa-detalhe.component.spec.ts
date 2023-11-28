import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaDetalheComponent } from './camisa-detalhe.component';

describe('CamisaDetalheComponent', () => {
  let component: CamisaDetalheComponent;
  let fixture: ComponentFixture<CamisaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamisaDetalheComponent]
    });
    fixture = TestBed.createComponent(CamisaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
