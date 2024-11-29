import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCertificacoesColaboradorComponent } from './listar-certificacoes-colaborador.component';

describe('ListarCertificacoesColaboradorComponent', () => {
  let component: ListarCertificacoesColaboradorComponent;
  let fixture: ComponentFixture<ListarCertificacoesColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCertificacoesColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCertificacoesColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
