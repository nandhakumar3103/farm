import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFertilizerComponent } from './banner-fertilizer.component';

describe('BannerFertilizerComponent', () => {
  let component: BannerFertilizerComponent;
  let fixture: ComponentFixture<BannerFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerFertilizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
