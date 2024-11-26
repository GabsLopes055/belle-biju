import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMeritosComponent } from './listar-meritos.component';

describe('ListarMeritosComponent', () => {
  let component: ListarMeritosComponent;
  let fixture: ComponentFixture<ListarMeritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMeritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarMeritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
