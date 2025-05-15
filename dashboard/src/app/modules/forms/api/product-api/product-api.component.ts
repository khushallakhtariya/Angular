import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-product-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.css']
})
export class ProductApiComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data.products;
    });
  }
  trackByProductId(index: number, product: any): number {
    return product.id;
  }
  
}
