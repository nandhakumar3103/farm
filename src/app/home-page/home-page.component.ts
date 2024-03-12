import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import { BannerVegComponent } from '../banner-veg/banner-veg.component';
import { BannerSeedComponent } from '../banner-seed/banner-seed.component';
import { BannerFertilizerComponent } from '../banner-fertilizer/banner-fertilizer.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent,BannerVegComponent,BannerSeedComponent,BannerFertilizerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  user_name: any;
  user_email: any;
  constructor( @Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.user_name = localStorage.getItem("user_name")
      this.user_email = localStorage.getItem("user_email")
    }
  }
}
