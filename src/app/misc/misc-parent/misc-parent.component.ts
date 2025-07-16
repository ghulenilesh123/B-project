import { Component } from '@angular/core';

@Component({
  selector: 'app-misc-parent',
  templateUrl: './misc-parent.component.html',
  styleUrls: ['./misc-parent.component.css']
})
export class MiscParentComponent {

   showdata:boolean =false ;
  myarray:any=[1,2,3,4,5,6,7] 

  isShowData:boolean=true

}
