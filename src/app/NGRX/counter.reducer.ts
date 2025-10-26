import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { initialstate } from "./counter.state";

export const counterreducer =createReducer(
initialstate,
on(increment,(state)=>({...state,count:state.count + 1})),
on(decrement,(state)=>({...state,count:state.count - 1})),
on(reset,(_)=>({...initialstate})),
)