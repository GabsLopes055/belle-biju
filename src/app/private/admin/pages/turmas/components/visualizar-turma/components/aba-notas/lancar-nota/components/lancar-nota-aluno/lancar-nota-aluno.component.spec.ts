import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarNotaAlunoComponent } from './lancar-nota-aluno.component';

describe('LancarNotaAlunoComponent', () => {
  let component: LancarNotaAlunoComponent;
  let fixture: ComponentFixture<LancarNotaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarNotaAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarNotaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
