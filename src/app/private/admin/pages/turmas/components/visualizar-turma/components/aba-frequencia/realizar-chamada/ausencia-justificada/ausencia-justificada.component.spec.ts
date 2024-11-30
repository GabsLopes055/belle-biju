import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusenciaJustificadaComponent } from './ausencia-justificada.component';

describe('AusenciaJustificadaComponent', () => {
  let component: AusenciaJustificadaComponent;
  let fixture: ComponentFixture<AusenciaJustificadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AusenciaJustificadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AusenciaJustificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
