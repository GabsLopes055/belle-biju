import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacaoHistoricoComponent } from './observacao-historico.component';

describe('ObservacaoHistoricoComponent', () => {
  let component: ObservacaoHistoricoComponent;
  let fixture: ComponentFixture<ObservacaoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservacaoHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservacaoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
