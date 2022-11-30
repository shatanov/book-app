import { Action, createReducer, on } from '@ngrx/store';

import { BookStateIntreface } from '../types/bookState.intreface';
import { getBookAction, getBookSuccesAction } from './actions/getBook.actions';


const initialState: BookStateIntreface = {
  isLoading: false,
  errors: null,
  data: null
};

const bookReducer = createReducer(
  initialState,
  on(
    getBookAction,
    (state): BookStateIntreface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getBookSuccesAction,
    (state, action): BookStateIntreface => ({
      ...state,
      isLoading: true,
      data: action.book
    })
  ),

);

export function reducer(state: BookStateIntreface, action: Action) {
  return bookReducer(state, action);
}
