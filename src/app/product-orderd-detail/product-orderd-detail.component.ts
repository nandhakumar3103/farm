import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowersgoodsService } from '../growersgoods.service';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-orderd-detail',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './product-orderd-detail.component.html',
  styleUrl: './product-orderd-detail.component.scss',
  // providers: [GrowersgoodsService, { provide: 'HttpClient', useClass: HttpClientModule }]
})
export class ProductOrderdDetailComponent {
  first_name: any;
  last_name: any;
  mobile_number: any;
  alternative_number: any;
  product_name: any;
  kg: any;
  address: any;
  city: any;
  email: any;
  pincode: any;
  name: any;
  id: any;
  products: any;
  prod: any;
  price: any

  constructor(private http: HttpClient, private api: GrowersgoodsService, @Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.name = localStorage.getItem("pro_name")
      this.price = localStorage.getItem("pro_price")
    }
  }

  placeorder() {
    const amount = this.price * this.kg;
    this.api.payment(amount).subscribe({
      next: (data: any) => {
        const orderId = data.order_id;
        this.api.initializePayment(orderId, amount);
        let bodyData = {
          first_name: this.first_name,
          last_name: this.last_name,
          mobile_number: this.mobile_number,
          alternative_number: this.alternative_number,
          product_name: this.name,
          kg: this.kg,
          address: this.address,
          city: this.city,
          email: this.email,
          pincode: this.pincode,
        };
        this.http.post('http://localhost:8080/order/orderDetail', bodyData)
          .subscribe((result: any) => {
            console.log(result);
          });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}