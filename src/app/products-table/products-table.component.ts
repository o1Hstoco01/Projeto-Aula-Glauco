import { Component, OnInit } from '@angular/core';
import { ProductsTable } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit{
  products: ProductsTable[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.service.getProducts().subscribe({
      next: data=> this.products = data
      }
    );
  }
  delete(product: ProductsTable){
    this.service.delete(product).subscribe({
      next: () => this.loadProducts()
    })
  }

}
