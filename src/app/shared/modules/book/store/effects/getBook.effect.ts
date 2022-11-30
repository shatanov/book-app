import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of } from 'rxjs';

import { BookService } from '../../service/book.service';
import { getBookAction, getBookFailureAction, getBookSuccesAction } from '../actions/getBook.actions';
import { GetBookResponseInterface } from '../../types/getBookResponse.interface';


@Injectable()
export class GetBookEffect {
  getBook$ = createEffect(() => this.actions$.pipe(
    ofType(getBookAction),
    switchMap(({url}) => {
      return this.bookService.getBook(url).pipe(
        map((book: GetBookResponseInterface) => {
          return getBookSuccesAction({ book });
        }),
        catchError(() => {
          return of(getBookFailureAction());
        })
      );
    })
  ));


  constructor(private actions$: Actions, private bookService: BookService){}
}
