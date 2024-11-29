import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisColaboradorComponent } from './dados-pessoais-colaborador.component';

describe('DadosPessoaisColaboradorComponent', () => {
  let component: DadosPessoaisColaboradorComponent;
  let fixture: ComponentFixture<DadosPessoaisColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosPessoaisColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosPessoaisColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
