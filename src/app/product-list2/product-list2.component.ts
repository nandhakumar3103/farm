import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { GrowersgoodsService } from '../growersgoods.service';

@Component({
  selector: 'app-product-list2',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-list2.component.html',
  styleUrl: './product-list2.component.scss'
})
export class ProductList2Component {
  product_name:any;
  id: any;
  products: any;
  
  constructor(private http: HttpClient, private api: GrowersgoodsService) { }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/category/seeds')
      .subscribe((prod: any) => {
        this.products = prod.message;
        console.log(prod.message);
      });
  }

}
