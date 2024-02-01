import { Component } from '@angular/core';
import { ProductList1Component } from '../product-list1/product-list1.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  searching(){
    console.log((<HTMLInputElement>document!.querySelector("#search"))!.value)
  }
}
