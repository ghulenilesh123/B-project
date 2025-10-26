import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterface } from "./counter.state";
import { state } from "@angular/animations";

export const selectCountState = createFeatureSelector<counterface>("counter")


export const selectCount = createSelector(
 selectCountState,
 (state:counterface)=>state.count 
)