import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-list2',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-list2.component.html',
  styleUrl: './product-list2.component.scss'
})
export class ProductList2Component {

}
