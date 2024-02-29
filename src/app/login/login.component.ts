import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GrowersgoodsService } from '../growersgoods.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user_email: any;
  password: any;
  name: any;
  Tokenstatus: any;
  jwtToken: any;
  isLoggedIn:any;

  constructor(private http: HttpClient, private api: GrowersgoodsService) {}

  login() {
    let bodyData = {
      user_email: this.user_email,
      password: this.password,
    };

    this.http.post('http://localhost:8080/users/user_login', bodyData).subscribe(
      (result: any) => {
        console.log(result);

        // Assuming the server sends a token upon successful login
        this.jwtToken = result.token;

        // Check if the server returned a token
        if (this.jwtToken) {
          this.Tokenstatus = 'success';
          alert('Login Successful');
          this.isLoggedIn = "true";
        } else {
          this.Tokenstatus = 'failure';
          alert('Login Failed. Please check your credentials.');
        }

        this.user_email = '';
        this.password = '';
      },
      (error) => {
        console.error(error);
        this.Tokenstatus = 'failure';
        alert('Login Failed. Please try again later.');
       
      }
    );
  }



}
