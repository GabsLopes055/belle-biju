import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConteudoComponent } from './editar-conteudo.component';

describe('EditarConteudoComponent', () => {
  let component: EditarConteudoComponent;
  let fixture: ComponentFixture<EditarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
