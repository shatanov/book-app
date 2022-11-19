import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { reducer } from 'src/app/auth/store/reducers';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer)
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect])
  ],
  declarations: [RegisterComponent]
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {
}
