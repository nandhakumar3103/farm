import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-list3',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-list3.component.html',
  styleUrl: './product-list3.component.scss'
})
export class ProductList3Component {

}
