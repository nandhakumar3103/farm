import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' || 'HttpClient',
})
export class GrowersgoodsService {
  constructor(private http:HttpClient) { }
  private apiUrl='http://localhost:8080/';
  single_product(id:any){
    return this.http.get<any[]>(`http://localhost:8080/category/vegetables/${id}`
    );

  }
}