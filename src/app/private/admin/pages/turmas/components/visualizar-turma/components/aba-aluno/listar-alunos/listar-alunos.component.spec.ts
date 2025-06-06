import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlunosComponent } from './listar-alunos.component';

describe('ListarAlunosComponent', () => {
  let component: ListarAlunosComponent;
  let fixture: ComponentFixture<ListarAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
