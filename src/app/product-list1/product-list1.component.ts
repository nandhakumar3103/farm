import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { GrowersgoodsService } from '../growersgoods.service';

@Component({
  selector: 'app-product-list1',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './product-list1.component.html',
  styleUrl: './product-list1.component.scss'
})
export class ProductList1Component {
  product_name:any;
  id: any;
  products: any;
  imageUrl='http://localhost:8080/';
  
  constructor(private http: HttpClient, private api: GrowersgoodsService) { }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/category/vegetables').subscribe((prod: any) => {
        this.products = prod.message;
        console.log(prod.message);
      });
  }


}
