import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookImgComponent } from './componets/bookImg/bookImg.component';
import { BookInfoComponent } from './componets/bookInfo/bookInfo.component';
import { BookFootnoteModule } from '../footnote/bookFootnote.module';
import { BookComponent } from './componets/book/book.component';



@NgModule({
  imports: [CommonModule,
    BookFootnoteModule
  ],
  declarations: [BookImgComponent, BookInfoComponent, BookComponent],
  exports: [BookImgComponent, BookInfoComponent, BookComponent],
})
export class BookModule {}
