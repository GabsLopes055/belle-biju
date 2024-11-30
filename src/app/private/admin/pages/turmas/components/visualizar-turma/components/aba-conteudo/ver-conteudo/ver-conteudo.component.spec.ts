import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConteudoComponent } from './ver-conteudo.component';

describe('VerConteudoComponent', () => {
  let component: VerConteudoComponent;
  let fixture: ComponentFixture<VerConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
