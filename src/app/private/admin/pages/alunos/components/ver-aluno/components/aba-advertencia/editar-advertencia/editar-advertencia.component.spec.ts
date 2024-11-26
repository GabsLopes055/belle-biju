import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdvertenciaComponent } from './editar-advertencia.component';

describe('EditarAdvertenciaComponent', () => {
  let component: EditarAdvertenciaComponent;
  let fixture: ComponentFixture<EditarAdvertenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAdvertenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
