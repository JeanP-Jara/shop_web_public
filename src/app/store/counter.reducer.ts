import { createReducer, on } from '@ngrx/store';
import { increment, setCounter } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(setCounter, (state, { value }) => value)
);

export function counterReducer(state: number | undefined, action: any) {
  return _counterReducer(state, action);
}
