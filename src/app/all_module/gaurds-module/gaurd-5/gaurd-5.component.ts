import { Component } from '@angular/core';

@Component({
  selector: 'app-gaurd-5',
  templateUrl: './gaurd-5.component.html',
  styleUrls: ['./gaurd-5.component.css']
})
export class Gaurd5Component {

  ismydurty: boolean = true;

  CanDeactivate() {
    return this.ismydurty
      ? confirm("you want leave this page")
      : true;
  }
}
