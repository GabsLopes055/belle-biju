import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasTurmasComponent } from './notas-turmas.component';

describe('NotasTurmasComponent', () => {
  let component: NotasTurmasComponent;
  let fixture: ComponentFixture<NotasTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasTurmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
