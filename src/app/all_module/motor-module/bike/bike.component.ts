import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {
constructor(private actRoute: ActivatedRoute){
    console.log("Testing the resolver");

    // get the resolver data into the component
    this.actRoute.data.subscribe((res:any)=>{
      console.log(res);
    })
  }
}
