import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { GrowersgoodsService } from '../growersgoods.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail2',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './product-detail2.component.html',
  styleUrl: './product-detail2.component.scss'
})
export class ProductDetail2Component {
  id: any;
  products: any;
  // imageUrl = 'http://44.211.166.253/';
  prod: any;

  constructor(
    private api: GrowersgoodsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private http:HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.singleseed_product(this.id).subscribe((res: any) => {
      this.products = res.message;
    });
  }
  payment(pro_name: any, price:any){
    if (isPlatformBrowser(this.platformId)) {
      if(localStorage.getItem("user_name")){
        localStorage.setItem("pro_name", pro_name);
        localStorage.setItem("pro_price", price);
        //alert('Redirecting to payment');
        this.router.navigate(['/product-orderd-detail'])
      } else {
        this.router.navigate(['/login'])
      }
    }
  }
}
