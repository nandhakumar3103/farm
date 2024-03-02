import { isPlatformBrowser } from '@angular/common';
import { GrowersgoodsService } from '../growersgoods.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  user_name: any;
  user_email: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.user_name = localStorage.getItem("user_name")
      this.user_email = localStorage.getItem("user_email")
    }
  }

}
