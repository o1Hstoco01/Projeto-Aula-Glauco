import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: ProductService){
    
  }
  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.loadProduct(id);
  }
  loadProduct(id: number) {
    this.service.getProductById(id).subscribe({
      next: data=> alert(data.name)
    })
  }

}
