import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GrowersgoodsService } from '../growersgoods.service';

@Component({
  selector: 'app-product-detail3',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail3.component.html',
  styleUrl: './product-detail3.component.scss'
})
export class ProductDetail3Component {
  id: any;
  products: any;
  // imageUrl = 'http://44.211.166.253/';
  prod: any;

  constructor(
    private api: GrowersgoodsService,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.singlefertilizer_product(this.id).subscribe((res: any) => {
      this.products = res.message;
    });
  }
  payment(pro_name: any, price:any){
    localStorage.setItem("pro_name", pro_name);
    localStorage.setItem("pro_price", price);
    alert('Redirecting to payment');
  }
}
