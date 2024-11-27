import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaDadosPessoaisComponent } from './aba-dados-pessoais.component';

describe('AbaDadosPessoaisComponent', () => {
  let component: AbaDadosPessoaisComponent;
  let fixture: ComponentFixture<AbaDadosPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaDadosPessoaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaDadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
