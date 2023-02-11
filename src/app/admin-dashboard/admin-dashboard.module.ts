import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardLayoutComponent } from './dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardIndexComponent } from './dashboard-index/admin-dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardSavedItemComponent } from './dashboard-saved-item/admin-dashboard-saved-item.component';
import { AdminDashboardProfileComponent } from './dashboard-profile/admin-dashboard-profile.component';
import { AdminDashboardOrderComponent } from './dashboard-order/admin-dashboard-order.component';
import { AdminDashboardCategoryComponent } from './admin-dashboard-category/admin-dashboard-category.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { CreateEditProductComponent } from './dashboard-products/create-edit-product/create-edit-product.component';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
// import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
// import { DialogModule } from '@syncfusion/ej2-angular-popups';
// import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AdminDashboardLayoutComponent,
    AdminDashboardIndexComponent,
    AdminDashboardSavedItemComponent,
    AdminDashboardProfileComponent,
    AdminDashboardOrderComponent,
    AdminDashboardCategoryComponent,
    DashboardProductsComponent,
    CreateEditProductComponent
  ],
  imports: [CommonModule, AdminDashboardRoutingModule, SharedModule, MatMenuModule,
    FormsModule, NgbDatepickerModule, ReactiveFormsModule
    ]
})
export class AdminDashboardModule { }
