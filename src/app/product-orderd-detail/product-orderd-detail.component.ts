import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-orderd-detail',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './product-orderd-detail.component.html',
  styleUrl: './product-orderd-detail.component.scss'
})
export class ProductOrderdDetailComponent {
  first_name:any;
  last_name:any;
  mobile_number:any;
  alternative_number:any;
  product_name:any;
  kg:any;
  address:any;
  city:any;
  email:any;
  pincode:any;
  constructor(private http:HttpClient){}
  placeorder(){
    alert('order Successfully......!')
    let bodyData={
      first_name:this.first_name,
      last_name:this.last_name,
      mobile_number:this.mobile_number,
      alternative_number:this.alternative_number,
      product_name:this.product_name,
      kg:this.kg,
      address:this.address,
      city:this.city,
      email:this.email,
      pincode:this.pincode,

    };
    // console.log(bodyData);
    
    this.http.post('http://localhost:8080/order/orderDetail',bodyData)
    .subscribe((result:any)=>{
      console.log(result);
    });
   }
  
}