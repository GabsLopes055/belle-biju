import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCertificacaoColaboradorComponent } from './ver-certificacao-colaborador.component';

describe('VerCertificacaoColaboradorComponent', () => {
  let component: VerCertificacaoColaboradorComponent;
  let fixture: ComponentFixture<VerCertificacaoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCertificacaoColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerCertificacaoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
