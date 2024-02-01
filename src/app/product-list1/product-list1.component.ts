import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-list1',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-list1.component.html',
  styleUrl: './product-list1.component.scss'
})
export class ProductList1Component {

}
