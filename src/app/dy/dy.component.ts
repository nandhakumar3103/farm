import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dy',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './dy.component.html',
  styleUrl: './dy.component.scss',
})
export class dyComponent {
  // TypeScript code

 user_email:any;
 user_name:any;
 password:any;
 Register:FormGroup | any;
 constructor(private http:HttpClient){}
 register(){
  alert('Registerd Successfully......!')
  let bodyData={
    user_name:this.user_name,
    user_email:this.user_email,
    password:this.password,
  };
  // console.log(bodyData);
  
  this.http.post('http://localhost:8080/users/user_register',bodyData)
  .subscribe((result:any)=>{
    console.log(result);
  });
 }

}
