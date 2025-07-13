import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, pairwise, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  constructor() { }

  private myReplaydt = new ReplaySubject(3)
  public currentReplay = this.myReplaydt.asObservable()
  
 getReplay() {
    this.myReplaydt.next("rahul")
  this.myReplaydt.next("kajol")
  this.myReplaydt.next("shekar")
   this.myReplaydt.next("atul")
   this.myReplaydt.next("sagar")
    return this.currentReplay
  }
  // ------------------------------async
  private myasyncdt = new AsyncSubject()
  public currenAsync = this.myasyncdt.asObservable()

  
 getAsync() {
    this.myasyncdt.next("red")
    this.myasyncdt.next("green")
    this.myasyncdt.next("pink")
    this.myasyncdt.next("blue")
    this.myasyncdt.next("black")
    this.myasyncdt.complete()
    return this.currenAsync
  }
  // --------------------------------------

//   private myBehavior = new BehaviorSubject<number>(0)
//   public currentdBehavior = this.myBehavior.asObservable()


// behavior(){
// this.myBehavior.next(100)
// this.myBehavior.next(200)
// this.myBehavior.next(300)
// this.myBehavior.next(400)
//  this.currentdBehavior.pipe(pairwise())
// .subscribe(([pre,curr])=>{
//   console.log(pre)
//   console.log(curr)
// })

private userData = new BehaviorSubject<any>(0);
  public currentUserData= this.userData.asObservable();

  behaviourSub(){

    this.userData.next(`"first value" ${100}`);
    this.userData.next(`"second value" ${200}`);
    this.userData.next(`"third value" ${300}`);
    this.userData.next(`"4th value" ${400}`);
    this.userData.next(`"5th value"${500}`);


    this.currentUserData.pipe(pairwise())
        .subscribe(([prev, curr])=>{
          console.log("previous value ", prev);
          console.log("current value ", curr);
        });
    // return this.currentUserData;
  }

    

}

