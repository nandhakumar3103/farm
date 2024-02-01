import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-detail1',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail1.component.html',
  styleUrl: './product-detail1.component.scss'
})
export class ProductDetail1Component {

}
