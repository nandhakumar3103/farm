import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetail1Component } from '../product-detail1/product-detail1.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
