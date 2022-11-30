import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './bookInfo.component.html',
  styleUrls: ['./bookInfo.component.scss']
})
export class BookInfoComponent {
  @Input('book') bookProps: object
}
