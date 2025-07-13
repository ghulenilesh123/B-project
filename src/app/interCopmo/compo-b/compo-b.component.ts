import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompoServiceService } from 'src/app/all_service/service/compo-service.service'; 

@Component({
  selector: 'app-compo-b',
  templateUrl: './compo-b.component.html',
  styleUrls: ['./compo-b.component.css']
})
export class CompoBComponent {
  recivedatafrmcompoA:any=''
  senddatafrmcompob:any='im sending data from component b';
constructor(private compos1:CompoServiceService,private router :Router ){

  this.compos1.getData.subscribe((res:any)=>{
    console.log(res)
    this.recivedatafrmcompoA=res
  })
}

senddatafrmB(){
  this.compos1.setData= this.senddatafrmcompob
  console.log(this.compos1.setData= this.senddatafrmcompob)
   this.router.navigateByUrl('Compo-A')
}

}
