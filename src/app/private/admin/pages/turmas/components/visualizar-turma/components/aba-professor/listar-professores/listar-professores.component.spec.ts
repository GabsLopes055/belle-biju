import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfessoresComponent } from './listar-professores.component';

describe('ListarProfessoresComponent', () => {
  let component: ListarProfessoresComponent;
  let fixture: ComponentFixture<ListarProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProfessoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
