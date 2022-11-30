import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { BookImgComponent } from './componets/bookImg/bookImg.component';
import { BookInfoComponent } from './componets/bookInfo/bookInfo.component';
import { BookFootnoteModule } from '../footnote/bookFootnote.module';
import { GetBookEffect } from './store/effects/getBook.effect';


@NgModule({
  imports: [CommonModule, BookFootnoteModule, EffectsModule.forFeature([GetBookEffect])],
  declarations: [BookImgComponent, BookInfoComponent],
  exports: [BookImgComponent, BookInfoComponent]
})
export class BookModule {}
