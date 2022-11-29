import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookFootnoteComponent } from './components/bookFootnote.component';


@NgModule({
  imports: [CommonModule],
  declarations: [BookFootnoteComponent],
  exports: [BookFootnoteComponent]
})
export class BookFootnoteModule {}
