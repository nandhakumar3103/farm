import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-detail3',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail3.component.html',
  styleUrl: './product-detail3.component.scss'
})
export class ProductDetail3Component {

}
