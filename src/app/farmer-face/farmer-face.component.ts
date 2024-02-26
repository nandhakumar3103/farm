import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-farmer-face',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './farmer-face.component.html',
  styleUrl: './farmer-face.component.scss'
})
export class FarmerFaceComponent {
  category: any;
  farmerName: any;
  productName: any;
  productDetails: any;
  productQuantity: any;
  address: any;
  pincode: any;
  mobileNo: any;
  altertiveMobileNo: any;
  email: any;
  Sell_product: FormGroup | any;
  constructor(private http: HttpClient) { }
   sell_product(){
    alert('Are you sure post the product details......!')
    let bodyData={
      farmerName:this.farmerName,
      productName:this.productName,
      category:this.category,
      productDetails:this.productDetails,
      productQuantity:this.productQuantity,
      address:this.address,
      pincode:this.pincode,
      mobileNo:this.mobileNo,
      altertiveMobileNo:this.altertiveMobileNo,
      email:this.email,
    };
    console.log(bodyData);
    
    this.http.post('http://localhost:8080/farmer/addProducts',bodyData)
    .subscribe((result:any)=>{
      console.log(result);
    });
   }


}
