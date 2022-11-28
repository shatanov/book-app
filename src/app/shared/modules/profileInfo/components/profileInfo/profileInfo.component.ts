import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CurrentUserInterface } from '../../../../types/currentUser.interface';
import { currentUserSelector, isLoggedInSelector } from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profileInfo.component.html',
  styleUrls: ['./profileInfo.component.scss']
})
export class ProfileInfoComponent implements OnInit{
  isLoggedIn$: Observable<boolean | null>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    // @ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
