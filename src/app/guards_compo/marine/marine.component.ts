import { Component } from '@angular/core';

@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.css']
})
export class MarineComponent {

isFormDirty:boolean = true;

  canDeactivate(){
    return this.isFormDirty 
    ? confirm('Your data is unsaved, do you really want to leave the page ?')
    : true;

  }
}
