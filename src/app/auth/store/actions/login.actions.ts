import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);

export const registerLoginAction = createAction(
  ActionTypes.LOGIN_SUCCSES,
  props<{currentUser: CurrentUserInterface}>()
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE);

