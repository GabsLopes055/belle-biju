import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarChamadasComponent } from './listar-chamadas.component';

describe('ListarChamadasComponent', () => {
  let component: ListarChamadasComponent;
  let fixture: ComponentFixture<ListarChamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarChamadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarChamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
