import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSeedComponent } from './banner-seed.component';

describe('BannerSeedComponent', () => {
  let component: BannerSeedComponent;
  let fixture: ComponentFixture<BannerSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
