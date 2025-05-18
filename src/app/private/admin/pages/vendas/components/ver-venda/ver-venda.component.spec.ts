import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVendaComponent } from './ver-venda.component';

describe('VerVendaComponent', () => {
  let component: VerVendaComponent;
  let fixture: ComponentFixture<VerVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
