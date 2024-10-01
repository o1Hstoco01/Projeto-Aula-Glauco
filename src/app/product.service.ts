import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsTable } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:3000/products'

  constructor(private http:HttpClient) { }

    getProducts(): Observable<ProductsTable []>{
        return this.http.get<ProductsTable []>(this.url);
    }
    getProductById(id:number): Observable<ProductsTable >{
      return this.http.get<ProductsTable >(`${this.url}/${id}`);
  }

    delete(product:ProductsTable): Observable<void>{
      return this.http.delete<void>(`${this.url}/${product.id}`);  
    }
    
    update(product: ProductsTable):Observable<ProductsTable>{
      return this.http.put<ProductsTable>(`${this.url}/${product.id}`, product);
    }

    save(product: ProductsTable):Observable<ProductsTable>{
      return this.http.post<ProductsTable>(this.url, product);
    }

}
