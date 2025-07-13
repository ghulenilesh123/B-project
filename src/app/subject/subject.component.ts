import { Component } from '@angular/core';
import { SubjectServiceService } from '../all_service/service/subject-service.service'; 

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
public replay:any=[]
public async:any;
public reacievbehavior:any=[]
  constructor(private subjectS: SubjectServiceService) {
    // this.getReplay()
    // this.getAsync()
    //  this.subjectS. behaviourSub()
  }
  getAsync() {
    this.subjectS.getAsync().subscribe((res: any) => {
      console.log("async response ", res)
      this.async=res

    })
  }
// ---------------------------------------------------
  getReplay() {

    this.subjectS.getReplay().subscribe((res: any) => {
      console.log("replay response ", res)
      this.replay.push(res)

    })
  }

  // --------------------------------------------------
  behavior(){
    this.reacievbehavior=this.subjectS.behaviourSub()
    console.log(this.reacievbehavior)
  }
  // -------------------------------------------------- deactivete guards
  isFormDirty:boolean = true;

  canDeactivate(){
    return this.isFormDirty 
    ? confirm('Your data is unsaved, do you really want to leave the page ?')
    : true;

  }
}
