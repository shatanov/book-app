import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { BookImgComponent } from './componets/bookImg/bookImg.component';
import { BookInfoComponent } from './componets/bookInfo/bookInfo.component';
import { BookFootnoteModule } from '../footnote/bookFootnote.module';
import { GetBookEffect } from './store/effects/getBook.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { BookService } from './service/book.service';


@NgModule({
  imports: [CommonModule,
    BookFootnoteModule,
    EffectsModule.forFeature([GetBookEffect]),
    StoreModule.forFeature('feat', reducer)
  ],
  declarations: [BookImgComponent, BookInfoComponent],
  exports: [BookImgComponent, BookInfoComponent],
  providers: [BookService]
})
export class BookModule {}
