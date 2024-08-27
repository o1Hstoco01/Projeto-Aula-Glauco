import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
    {
    "id"      :1,
    "name"    :"Computador",
    "price"   : 5000,
    "category":"Eletronicos",
  },
   {
    "id"      :1,
    "name"    :"Computador",
    "price"   : 5000,
    "category":"Eletronicos",
  },
   {
    "id"      :1,
    "name"    :"Computador",
    "price"   : 5000,
    "category":"Eletronicos",
  }
  ];
}
