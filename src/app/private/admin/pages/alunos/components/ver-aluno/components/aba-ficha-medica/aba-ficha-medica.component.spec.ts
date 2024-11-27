import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFichaMedicaComponent } from './aba-ficha-medica.component';

describe('AbaFichaMedicaComponent', () => {
  let component: AbaFichaMedicaComponent;
  let fixture: ComponentFixture<AbaFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFichaMedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
