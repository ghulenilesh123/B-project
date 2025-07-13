import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gaurd-4',
  templateUrl: './gaurd-4.component.html',
  styleUrls: ['./gaurd-4.component.css']
})
export class Gaurd4Component {
  
  constructor(private act:ActivatedRoute){

    this.act.data.subscribe((res:any)=>{
      console.log(res[0][1])
    })
  }
}
