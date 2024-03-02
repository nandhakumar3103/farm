import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVegComponent } from './banner-veg.component';

describe('BannerVegComponent', () => {
  let component: BannerVegComponent;
  let fixture: ComponentFixture<BannerVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerVegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
