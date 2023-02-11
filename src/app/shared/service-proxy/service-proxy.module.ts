import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as services from './index';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    
    services.AuthServiceService,
    services.User
  ]
})
export class ServiceProxyModule { }
