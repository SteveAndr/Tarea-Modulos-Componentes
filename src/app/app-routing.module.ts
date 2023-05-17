import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';

import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthComponent } from './auth/auth.component';
const routes:Routes = [

{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
{path: 'auth', component: AuthComponent },
{path: '**', component: NoFoundPageComponent} ,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

