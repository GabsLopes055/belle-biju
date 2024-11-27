import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTransferenciaComponent } from './detalhes-transferencia.component';

describe('DetalhesTransferenciaComponent', () => {
  let component: DetalhesTransferenciaComponent;
  let fixture: ComponentFixture<DetalhesTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesTransferenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
