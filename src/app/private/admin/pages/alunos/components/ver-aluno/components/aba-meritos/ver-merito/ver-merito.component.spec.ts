import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMeritoComponent } from './ver-merito.component';

describe('VerMeritoComponent', () => {
  let component: VerMeritoComponent;
  let fixture: ComponentFixture<VerMeritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMeritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerMeritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
