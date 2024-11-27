import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAcademicasComponent } from './informacoes-academicas.component';

describe('InformacoesAcademicasComponent', () => {
  let component: InformacoesAcademicasComponent;
  let fixture: ComponentFixture<InformacoesAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesAcademicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
