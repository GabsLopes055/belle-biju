import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPesquisaComponent } from './ver-pesquisa.component';

describe('VerPesquisaComponent', () => {
  let component: VerPesquisaComponent;
  let fixture: ComponentFixture<VerPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
