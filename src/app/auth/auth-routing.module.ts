import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from '../pages/pages.component';


const routes : Routes = [



  //rutas protegidas

  {path:'', component: LoginComponent,
children:[
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
]}
  

]

 


  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthRoutingModule { }
//ADRIAN MUÑOZ