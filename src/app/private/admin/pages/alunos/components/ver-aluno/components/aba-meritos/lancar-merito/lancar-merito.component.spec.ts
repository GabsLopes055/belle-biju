import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarMeritoComponent } from './lancar-merito.component';

describe('LancarMeritoComponent', () => {
  let component: LancarMeritoComponent;
  let fixture: ComponentFixture<LancarMeritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarMeritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarMeritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
