import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoComportamentoComponent } from './historico-comportamento.component';

describe('HistoricoComportamentoComponent', () => {
  let component: HistoricoComportamentoComponent;
  let fixture: ComponentFixture<HistoricoComportamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoComportamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoComportamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
