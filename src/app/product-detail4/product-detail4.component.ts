import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-detail4',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail4.component.html',
  styleUrl: './product-detail4.component.scss'
})
export class ProductDetail4Component {

}
