import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHistoricoComponent } from './cadastrar-historico.component';

describe('CadastrarHistoricoComponent', () => {
  let component: CadastrarHistoricoComponent;
  let fixture: ComponentFixture<CadastrarHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
