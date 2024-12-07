import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroBimestreComponent } from './primeiro-bimestre.component';

describe('PrimeiroBimestreComponent', () => {
  let component: PrimeiroBimestreComponent;
  let fixture: ComponentFixture<PrimeiroBimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroBimestreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiroBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
