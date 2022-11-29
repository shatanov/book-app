import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-footnote',
  templateUrl: './bookFootnote.component.html',
  styleUrls: ['./bookFootnote.component.scss']
})
export class BookFootnoteComponent {
  @Input('size') sizeProps: string;
  @Input('status') statusProps: string;
}