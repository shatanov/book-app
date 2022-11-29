import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccesAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCSES,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
