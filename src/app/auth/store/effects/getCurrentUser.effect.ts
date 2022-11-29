import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { PersistanceService } from '../../../shared/services/persistance.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccesAction
} from '../actions/getCurrentUser.actions';


@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = this.persistanceService.get('tokenName')
      if(!token){
        return of(getCurrentUserFailureAction())
      }
      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          return getCurrentUserSuccesAction({ currentUser });
        }),
        catchError(() => {
          return of(getCurrentUserFailureAction());
        })
      );
    })
  ));


  constructor(private actions$: Actions, private authService: AuthService,
              private persistanceService: PersistanceService) {
  }
}
