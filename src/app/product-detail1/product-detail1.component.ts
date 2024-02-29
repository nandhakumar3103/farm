import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { GrowersgoodsService } from '../growersgoods.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail1',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './product-detail1.component.html',
  styleUrl: './product-detail1.component.scss'
})
export class ProductDetail1Component {
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
    this.api.singleveg_product(this.id).subscribe((res: any) => {
      this.products = res.message;
    });
  }
  payment(){
    alert('Redirecting to payment');
  }

}
