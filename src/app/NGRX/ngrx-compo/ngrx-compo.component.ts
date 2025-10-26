import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../counter.selector';
import { decrement, increment, reset } from '../counter.action';

@Component({
  selector: 'app-ngrx-compo',
  templateUrl: './ngrx-compo.component.html',
  styleUrls: ['./ngrx-compo.component.css']
})
export class NgrxCompoComponent {
  count$:Observable<number>;
constructor(private store :Store){
 this.count$ =this.store .select(selectCount);

}

increment(){
this.store.dispatch(increment())
}

decrement(){
this.store.dispatch(decrement())

}

reset(){
this.store.dispatch(reset())

}



}
