import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarConteudoComponent } from './adicionar-conteudo.component';

describe('AdicionarConteudoComponent', () => {
  let component: AdicionarConteudoComponent;
  let fixture: ComponentFixture<AdicionarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
