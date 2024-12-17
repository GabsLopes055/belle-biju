import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEscolaComponent } from './dados-escola.component';

describe('DadosEscolaComponent', () => {
  let component: DadosEscolaComponent;
  let fixture: ComponentFixture<DadosEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosEscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
