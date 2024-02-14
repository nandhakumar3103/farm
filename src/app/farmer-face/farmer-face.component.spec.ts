import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFaceComponent } from './farmer-face.component';

describe('FarmerFaceComponent', () => {
  let component: FarmerFaceComponent;
  let fixture: ComponentFixture<FarmerFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerFaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
