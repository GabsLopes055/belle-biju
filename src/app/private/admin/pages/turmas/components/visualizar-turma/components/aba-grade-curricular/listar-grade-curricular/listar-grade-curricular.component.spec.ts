import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGradeCurricularComponent } from './listar-grade-curricular.component';

describe('ListarGradeCurricularComponent', () => {
  let component: ListarGradeCurricularComponent;
  let fixture: ComponentFixture<ListarGradeCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarGradeCurricularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarGradeCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
