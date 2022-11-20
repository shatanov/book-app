import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of } from 'rxjs';

import { registerAction, registerFailureAction, registerSuccsesAction } from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccsesAction({ currentUser });
        }),
        catchError(() => {
          return of(registerFailureAction());
        })
      );
    })
  ));
 // TODO catchError don`t work
  constructor(private actions$: Actions, private authService: AuthService) {}
}
