import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const companyRoutes: Routes = [
  {
    path: 'company', component: CompanyComponent,
    children: [
      {path: 'company-list', component: CompanyListComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes),
  ],
  exports: [ RouterModule ]
})
export class CompanyRoutingModule { }
