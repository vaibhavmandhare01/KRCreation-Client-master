import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  constructor() {}

  ngOnInit(): void {
    this.products = productsDB.Product;
      this.isLoaded = true
      
    /* setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 2000) */
  }
}
