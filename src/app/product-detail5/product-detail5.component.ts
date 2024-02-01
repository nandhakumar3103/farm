import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-detail5',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail5.component.html',
  styleUrl: './product-detail5.component.scss'
})
export class ProductDetail5Component {

}
