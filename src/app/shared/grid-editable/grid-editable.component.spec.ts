import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditableComponent } from './grid-editable.component';

describe('GridEditableComponent', () => {
  let component: GridEditableComponent;
  let fixture: ComponentFixture<GridEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridEditableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
