import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardCategoryComponent } from './admin-dashboard-category/admin-dashboard-category.component';
import { AdminDashboardIndexComponent } from './dashboard-index/admin-dashboard-index.component';
import { AdminDashboardLayoutComponent } from './dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardOrderComponent } from './dashboard-order/admin-dashboard-order.component';
import { CreateEditProductComponent } from './dashboard-products/create-edit-product/create-edit-product.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { AdminDashboardProfileComponent } from './dashboard-profile/admin-dashboard-profile.component';
import { AdminDashboardSavedItemComponent } from './dashboard-saved-item/admin-dashboard-saved-item.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminDashboardIndexComponent
  },
  {
    path: 'saved-items',
    component: AdminDashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: AdminDashboardProfileComponent
  },
  {
    path: 'orders',
    component: AdminDashboardOrderComponent
  },
  {
    path: 'category',
    component: AdminDashboardCategoryComponent
  },
  {
    path: 'product',
    component: DashboardProductsComponent
  },
  {
    path: 'createOrEditProduct',
    component: CreateEditProductComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    children: DashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
