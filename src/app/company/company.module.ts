import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor() {
    console.log('Company Module Loaded');
  }
 }
