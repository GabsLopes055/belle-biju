import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimEscolarComponent } from './boletim-escolar.component';

describe('BoletimEscolarComponent', () => {
  let component: BoletimEscolarComponent;
  let fixture: ComponentFixture<BoletimEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletimEscolarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletimEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
