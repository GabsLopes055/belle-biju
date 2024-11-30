import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosTurmaComponent } from './dados-turma.component';

describe('DadosTurmaComponent', () => {
  let component: DadosTurmaComponent;
  let fixture: ComponentFixture<DadosTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosTurmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
