import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  Create() {
    this.router.navigate(['adminDashboard/createOrEditProduct']);
  }
}
