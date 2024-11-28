import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarDocumentoComponent } from './lancar-documento.component';

describe('LancarDocumentoComponent', () => {
  let component: LancarDocumentoComponent;
  let fixture: ComponentFixture<LancarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarDocumentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
