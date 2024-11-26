import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdvertenciaComponent } from './listar-advertencia.component';

describe('ListarAdvertenciaComponent', () => {
  let component: ListarAdvertenciaComponent;
  let fixture: ComponentFixture<ListarAdvertenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAdvertenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
