import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent {

  
  constructor(private actRoute: ActivatedRoute){
    console.log("Testing the resolver");

    // get the resolver data into the component
    this.actRoute.data.subscribe((res:any)=>{
      console.log(res);
    })
  }
}
