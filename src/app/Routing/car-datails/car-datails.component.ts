import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-datails',
  templateUrl: './car-datails.component.html',
  styleUrls: ['./car-datails.component.css']
})
export class CarDatailsComponent {

  constructor(private act: ActivatedRoute) {
    // this.printData()
    // this.printData2()
    // this.printData3()
    this.printData4()
  }

  printData() {
    // let data = this.act.snapshot
    console.log(this.act.snapshot)
    console.log(this.act.snapshot.params['input'])
  }

  printData2() {
    console.log(this.act.paramMap)
    this.act.paramMap.subscribe((res: any) => {
      console.log(res.params['input'])
    })
  }

  printData3(){
    console.log(this.act.snapshot.queryParamMap.get('name'))
    console.log(this.act.snapshot.queryParamMap.get('lname'))
  }

  printData4(){
    console.log(this.act.queryParamMap)
    this.act.queryParamMap.subscribe((res:any)=>{
      // console.log(res)
      let data1 =res.get('name')
      let data2 =res.get('lname')
      console.log(data1,data2)
    })
  }
}
