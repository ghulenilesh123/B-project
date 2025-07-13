import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldMultiTripComponent } from './gold-multi-trip/gold-multi-trip.component';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { StudentTravelComponent } from './student-travel/student-travel.component';
import { RouterModule, Routes } from '@angular/router';



const rot:Routes=[
  {path:"gold",component:GoldMultiTripComponent},
  {path:'single',component:SingleTripComponent},
  {path:'student',component:StudentTravelComponent}
]



@NgModule({
  declarations: [
    GoldMultiTripComponent,
    SingleTripComponent,
    StudentTravelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rot)
  ]
})
export class TravelModuleModule { }
