import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookImgComponent } from './componets/bookImg/bookImg.component';
import { BookInfoComponent } from './componets/bookInfo/bookInfo.component';
import { BookFootnoteModule } from '../footnote/bookFootnote.module';


@NgModule({
  imports: [CommonModule, BookFootnoteModule],
  declarations: [BookImgComponent, BookInfoComponent],
  exports: [BookImgComponent, BookInfoComponent]
})
export class BookModule {}
