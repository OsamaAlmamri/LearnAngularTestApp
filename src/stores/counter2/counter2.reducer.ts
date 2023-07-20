import {createAction, createReducer, on} from "@ngrx/store";

import {increment, decrement, reset, customIncrement} from "./counter2.actions";
import {initialState} from "./counter2.state";

const _counter2Reducer = createReducer(initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }), on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }), on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }), on(customIncrement, (state,action) => {
    // @ts-ignore
    return {
      ...state,
      counter: state.counter+action.value
            }
  }),
);

export function Counter2Reducer(state: any, action: any) {
  return _counter2Reducer(state, action);
}
