import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistoricoComponent } from './ver-historico.component';

describe('VerHistoricoComponent', () => {
  let component: VerHistoricoComponent;
  let fixture: ComponentFixture<VerHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
