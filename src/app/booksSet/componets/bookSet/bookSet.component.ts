import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookInterface } from '../../../shared/types/book.interface';

@Component({
  selector: 'app-bookSet-info',
  templateUrl: './bookSet.component.html',
  styleUrls: ['./bookSet.component.scss']
})
export class BookSetComponent implements OnInit {
  MAX_BOOKS_SET_LENGTH = 4;
  booksList: BookInterface[];

  constructor(private store: Store) {}

  bookData = {
    'id': 1,
    'title': 'pop',
    'books': [
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
      {
        'name': 'BOOK',
        'decsription': ' Тамила Ассандер - последняя представительница правящей династии Гарета.' +
          ' Единственная, в чьей крови еще сохранились ' +
          'крохи древнего благославления Богини. Та, кто слышит голос песков. Та, что была жестоко предана. ',
        'imgUrl': 'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg',
        'footnotes': [
          {
            'name': 'svds',
            'status': true
          },
          {
            'name': 'svds',
            'status': false
          },
          {
            'name': 'svds',
            'status': false
          }
        ]
      },
    ]
  };

  getReducedBooksSet(): void {
    this.booksList = this.bookData.books.slice(-(this.MAX_BOOKS_SET_LENGTH));
  }

  ngOnInit(): void {
    this.getReducedBooksSet()
  }
}
