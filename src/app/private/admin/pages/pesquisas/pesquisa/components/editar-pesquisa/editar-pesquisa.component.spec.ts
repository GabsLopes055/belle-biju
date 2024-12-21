import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPesquisaComponent } from './editar-pesquisa.component';

describe('EditarPesquisaComponent', () => {
  let component: EditarPesquisaComponent;
  let fixture: ComponentFixture<EditarPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
