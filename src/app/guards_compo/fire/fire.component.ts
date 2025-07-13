import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent {
  isFormDirty: boolean = true;

  canDeactivate() {
    return this.isFormDirty
      ? confirm('Your data is not saved,  you want to leave this page ?')
      : true;

  }
  constructor(private actRoute: ActivatedRoute) {
    console.log("Testing the resolver");

    // get the resolver data into the component
    this.actRoute.data.subscribe((res: any) => {
      console.log(res[0]);
    })
  }
}

