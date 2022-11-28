import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CurrentUserInterface } from '../../../../types/currentUser.interface';
import { currentUserSelector, isLoggedInSelector } from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit{
  isLoggedIn$: Observable<boolean | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
