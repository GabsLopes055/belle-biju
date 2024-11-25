import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFrequenciaComponent } from './aba-frequencia.component';

describe('AbaFrequenciaComponent', () => {
  let component: AbaFrequenciaComponent;
  let fixture: ComponentFixture<AbaFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFrequenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
