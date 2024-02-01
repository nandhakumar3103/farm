import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-product-detail2',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './product-detail2.component.html',
  styleUrl: './product-detail2.component.scss'
})
export class ProductDetail2Component {

}
