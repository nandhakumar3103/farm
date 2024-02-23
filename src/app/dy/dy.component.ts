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

  email: any;
  pwd: any;
  name: any;
  newpwd: any;
  newemail: any;
  message() {
    alert('login Successfully');
  }
  reg() {
    alert('Registered Successfully');
  }
}
