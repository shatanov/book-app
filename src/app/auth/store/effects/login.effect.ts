import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { loginAction, loginFailureAction, loginSuccesAction } from '../actions/login.actions';


@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ request }) => {
      return this.authService.login(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistanceService.set('tokenName', currentUser.fullName); // Используем имя за место JWT токена
          return loginSuccesAction({ currentUser });
        }),
        catchError(() => {
          return of(loginFailureAction());
        })
      );
    })
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginSuccesAction),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
    {dispatch: false}
  );

  constructor(private actions$: Actions, private authService: AuthService,
              private persistanceService: PersistanceService, private router: Router) {
  }
}
