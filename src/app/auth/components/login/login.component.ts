import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isSubmittingSelector } from '../../store/selectors';
import { loginAction } from '../../store/actions/login.actions';
import { LoginRequestInterface } from '../../types/loginRequest.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmint(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    };
    // TODO не отрабатывает апи
    this.store.dispatch(loginAction({ request }));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      // TODO Работает ли валидация?
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
