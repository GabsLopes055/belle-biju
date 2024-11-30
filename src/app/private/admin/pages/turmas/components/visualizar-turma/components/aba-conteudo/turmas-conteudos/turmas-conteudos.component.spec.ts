import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasConteudosComponent } from './turmas-conteudos.component';

describe('TurmasConteudosComponent', () => {
  let component: TurmasConteudosComponent;
  let fixture: ComponentFixture<TurmasConteudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmasConteudosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurmasConteudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
