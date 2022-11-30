import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { GetBookEffect } from './store/effects/getBook.effect';
import { reducer } from './store/reducers';
import { BookService } from './service/book.service';
import { BookSetComponent } from './componets/bookSet/bookSet.component';
import { TopBarModule } from '../shared/modules/topBar/topBar.module';
import { BookModule } from '../shared/modules/book/book.module';


const routes: Routes = [
  {
    path: '',
    component: BookSetComponent
  },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetBookEffect]),
    StoreModule.forFeature('feat', reducer), TopBarModule, BookModule
  ],
  declarations: [BookSetComponent],
  providers: [BookService]
})
export class BooksSetModule{}
