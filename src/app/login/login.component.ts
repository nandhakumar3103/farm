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
  isLoggedIn: any;

  constructor(private http: HttpClient, private api: GrowersgoodsService, private router: Router) { }

  login() {
    let bodyData = {
      user_email: this.user_email,
      password: this.password,
    };
    this.http.post('http://localhost:8080/users/user_login', bodyData).subscribe({
      next: (result: any) => {
        this.jwtToken = result.token;
        if (this.jwtToken) {
          localStorage.setItem('user_name', result.data.user_name)
          localStorage.setItem('user_email', result.data.user_email)
          this.Tokenstatus = 'success';
          alert('Login Successful');
          this.isLoggedIn = "true";
          this.router.navigate(['/'])
        } else {
          this.Tokenstatus = 'failure';
          alert('Login Failed. Please check your credentials.');
        }
        this.user_email = '';
        this.password = '';
      },
      error: (error) => {
        console.error(error);
        this.Tokenstatus = 'failure';
        alert('Login Failed. Please try again later.');
      }
    });
  }



}
