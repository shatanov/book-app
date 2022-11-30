import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionsTypes';
import { GetBookResponseInterface } from '../../types/getBookResponse.interface';

export const getBookAction = createAction(
  ActionTypes.GET_BOOK,
  props<{ url: string }>()
);

export const getBookSuccesAction = createAction(
  ActionTypes.GET_BOOK_SUCCSES,
  props<{ book: GetBookResponseInterface }>()
);

export const getBookFailureAction = createAction(ActionTypes.GET_BOOK_FAILURE);
