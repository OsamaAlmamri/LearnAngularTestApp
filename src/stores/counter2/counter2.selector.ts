import {CounterModel} from "./counter2.model";
import {Store, createFeatureSelector, createSelector} from "@ngrx/store";

const getCounterState = createFeatureSelector<CounterModel>('count2');
export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter
})
export const getChannel = createSelector(getCounterState, (state) => {
  return state.channelName
})
