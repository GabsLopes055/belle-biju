import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCertificacaoColaboradorComponent } from './cadastrar-certificacao-colaborador.component';

describe('CadastrarCertificacaoColaboradorComponent', () => {
  let component: CadastrarCertificacaoColaboradorComponent;
  let fixture: ComponentFixture<CadastrarCertificacaoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarCertificacaoColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarCertificacaoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
