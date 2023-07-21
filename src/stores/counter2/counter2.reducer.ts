import {createAction, createReducer, on} from "@ngrx/store";

import {increment, decrement, reset, customIncrement} from "./counter2.actions";
import {initialState} from "./counter2.state";
import {CounterModel} from "./counter2.model";

const _counter2Reducer = createReducer(initialState,
  on(increment, (state:CounterModel) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }), on(decrement, (state:CounterModel) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }), on(reset, (state:CounterModel) => {
    return {
      ...state,
      counter: 0
    }
  }), on(customIncrement, (state:CounterModel,action) => {
    // @ts-ignore
    return {
      ...state,
      counter: state.counter+action.value
            }
  }),
);

export function Counter2Reducer(state: any, action: any):CounterModel {
  return _counter2Reducer(state, action);
}
