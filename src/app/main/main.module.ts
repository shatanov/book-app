import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { TopBarModule } from '../shared/modules/topBar/topBar.module';


const routes: Routes = [
  {
    path: 'app',
    component: MainPageComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature('main', reducer),
    // EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    TopBarModule
  ],
  declarations: [MainPageComponent],
  // providers: [AuthService, PersistanceService]
})
export class MainPageModule {
}
