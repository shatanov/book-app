import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const registerSuccsesAction = createAction(
  ActionTypes.REGISTER_SUCCSES,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
