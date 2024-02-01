import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavBarComponent,FooterComponent,HomePageComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
