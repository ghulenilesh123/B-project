import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gaurd1Component } from './gaurd-1/gaurd-1.component';
import { Gaurd2Component } from './gaurd-2/gaurd-2.component';
import { Gaurd3Component } from './gaurd-3/gaurd-3.component';
import { Gaurd4Component } from './gaurd-4/gaurd-4.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Gaurd5Component } from './gaurd-5/gaurd-5.component';
import {  mychildactivete, mydeactive, myGuardsGuard, mymatch, myresolver } from 'src/app/guards/my-guards.guard';

const rot: Routes = [
  { path: "gaurd_1", component: Gaurd1Component, canActivate: [myGuardsGuard] },
  // { path: "gaurd_2", component: Gaurd2Component },
  // { path: "gaurd_3", component: Gaurd3Component },
  // { path: "gaurd_4", component: Gaurd4Component },
  { path: "gaurd_5", component: Gaurd5Component , canDeactivate:[mydeactive]},
  { path: "login", component: LoginComponent },

    {
    path: "gaurd_2", canActivateChild:[mychildactivete],
    children:[
      { path: "", component: Gaurd2Component },
      { path: "gaurd_3", component: Gaurd3Component,canMatch:[mymatch] },
      { path: "gaurd_4", component: Gaurd4Component,resolve:[myresolver] },
    ]
  }
]

@NgModule({
  declarations: [
    Gaurd1Component,
    Gaurd2Component,
    Gaurd3Component,
    Gaurd4Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rot)
  ]
})
export class GaurdsModuleModule { }
