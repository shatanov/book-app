import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction, registerSuccsesAction } from 'src/app/auth/store/actions/register.action';

import { Action, createReducer, on } from '@ngrx/store';


const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    registerSuccsesAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
