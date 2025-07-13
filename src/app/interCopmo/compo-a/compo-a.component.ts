import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompoServiceService } from 'src/app/all_service/service/compo-service.service'; 

@Component({
  selector: 'app-compo-a',
  templateUrl: './compo-a.component.html',
  styleUrls: ['./compo-a.component.css']
})
export class CompoAComponent {

  public senddatafrmAtoB :any="deta from A to B";
  public reacievdatafromB:any='';

constructor(private compos1:CompoServiceService ,private router :Router){

this.getData()
  
}

getData(){
  this.compos1.getData.subscribe((res:any)=>{
    console.log(res)
    this.reacievdatafromB = res
  })
}

setData(){
  console.log("hello")
  // deta from compos1 
  this.compos1.setData =this.senddatafrmAtoB;
  //from this component 
  console.log(this.senddatafrmAtoB)
   this.router.navigateByUrl('Compo-B')


}}
