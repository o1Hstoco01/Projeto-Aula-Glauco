import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsTable } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

    getProducts(): Observable<ProductsTable []>{
        return this.http.get<ProductsTable []>('http://localhost:3000/products');
    }
    getProductById(id:number): Observable<ProductsTable >{
      return this.http.get<ProductsTable >('http://localhost:3000/products/' + id);
  }

    delete(product:ProductsTable): Observable<void>{
      return this.http.delete<void>('http://localhost:3000/products/' + product.id);  
    }
}
