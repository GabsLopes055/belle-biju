import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirConteudoComponent } from './concluir-conteudo.component';

describe('ConcluirConteudoComponent', () => {
  let component: ConcluirConteudoComponent;
  let fixture: ComponentFixture<ConcluirConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcluirConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcluirConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
