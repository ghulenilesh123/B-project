import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorHomeComponent } from './motor-home/motor-home.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { RouterModule, Routes } from '@angular/router';

var rot:Routes=[
  {path:"home",component:MotorHomeComponent},
  {path:'bike',component:BikeComponent},
  {path:'car',component:CarComponent}
]


@NgModule({
  declarations: [
    MotorHomeComponent,
    BikeComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rot)
  ]
})
export class MotorModuleModule { }
