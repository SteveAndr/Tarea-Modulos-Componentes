import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';


const routes : Routes = [



    //rutas protegidas

    {path:'dashboard', component: PagesComponent,
  children:[
    {path:'', component: PagesComponent},
    {path:'products', component: ProductsComponent},
    {path:'categories', component: CategoriesComponent},
  ]}
    
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
  ],

})
export class PagesRoutingModule { }

//ADRIAN MUÑOZ