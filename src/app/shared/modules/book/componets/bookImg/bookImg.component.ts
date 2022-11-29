import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-img',
  templateUrl: './bookImg.component.html',
  styleUrls: ['./bookImg.component.scss']
})
export class BookImgComponent {
  @Input('imgSrc') imgSrcProps: string
  @Input('imgSize') imgSizeProps: string
}
