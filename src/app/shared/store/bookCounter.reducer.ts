import {createReducer, on} from '@ngrx/store';
import {decrement, increment} from './bookCounter.action';

export const initialState = 0;

const _bookCounterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

export function bookCounterReducer(state, action) {
  return _bookCounterReducer(state, action);
}
