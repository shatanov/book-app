import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmint(): void {
    this.store.dispatch(registerAction(this.form.value));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }
}
