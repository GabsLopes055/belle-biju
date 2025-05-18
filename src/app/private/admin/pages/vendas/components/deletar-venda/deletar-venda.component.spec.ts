import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarVendaComponent } from './deletar-venda.component';

describe('DeletarVendaComponent', () => {
  let component: DeletarVendaComponent;
  let fixture: ComponentFixture<DeletarVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarVendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
