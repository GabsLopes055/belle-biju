import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMeritoComponent } from './editar-merito.component';

describe('EditarMeritoComponent', () => {
  let component: EditarMeritoComponent;
  let fixture: ComponentFixture<EditarMeritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMeritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMeritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
