import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirModalChamadaComponent } from './abrir-modal-chamada.component';

describe('AbrirModalChamadaComponent', () => {
  let component: AbrirModalChamadaComponent;
  let fixture: ComponentFixture<AbrirModalChamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirModalChamadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirModalChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
