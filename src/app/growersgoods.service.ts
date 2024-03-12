import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


declare var Razorpay: any;

@Injectable({
  providedIn: 'root' || 'HttpClient',
})
export class GrowersgoodsService {
  growersgoodsService: any;
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080/';
  
  singleveg_product(id: any) {
    return this.http.get<any[]>(`http://localhost:8080/category/vegetables/${id}`
    );

  }

  singleseed_product(id: any) {
    return this.http.get<any[]>(`http://localhost:8080/category/seeds/${id}`
    );

  }
  singlefertilizer_product(id: any) {
    return this.http.get<any[]>(`http://localhost:8080/category/fertilizer/${id}`
    );

  }
  prod_name(id: any) {
    return this.http.get<any[]>(`http://localhost:8080/category/vegetables/${id}`
    );
  }

  payment(amount: any): Observable<object> {
    return this.http.post<any>(`${this.apiUrl}/payment`, { amount })
  }

  initializePayment(order_id: any, amount: any) {
    const options: any = {
      key: 'rzp_test_lV9RK6rKez6hfN',
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your services',
      orderId: order_id,
      handler: function (data: any) {
        console.log(data);
      },
      prefill: {
        name: 'Customer Name',
        email: 'nandhakumar.r3103@gmail.com',
        contact: '1234567890'
      },
      notes: {
        address: 'Customer Address'
      },
      theme: {
        color: '#F37254'
      }
    };
    const rzp = new Razorpay(options);
    rzp.open();
  }
}







