import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaGeralComponent } from './chamada-geral.component';

describe('ChamadaGeralComponent', () => {
  let component: ChamadaGeralComponent;
  let fixture: ComponentFixture<ChamadaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadaGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChamadaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
