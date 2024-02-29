import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../landing/landing.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://gabrielcraftlabsproductos.free.beeceptor.com/api/';
  // private http = inject(HttpClient);

  constructor(
    public http: HttpClient
  ) {}

  fetchPoductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  fetchPoduct(id: string): Observable<Product> {
    return this.http.get<Product>(`this.url/${id}`);
  }
}
