import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './admin-dashboard-saved-item.component.html',
  styleUrls: ['./admin-dashboard-saved-item.component.scss']
})
export class AdminDashboardSavedItemComponent implements OnInit {
  view = 'list';

  products;
  constructor() {}

  ngOnInit(): void {
    this.products = productsDB.Product;
  }
}
