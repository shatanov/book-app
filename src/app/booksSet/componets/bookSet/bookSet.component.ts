import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookInterface } from '../../../shared/types/book.interface';

@Component({
  selector: 'app-bookSet-info',
  templateUrl: './bookSet.component.html',
  styleUrls: ['./bookSet.component.scss']
})
export class BookSetComponent implements OnInit {
  MAX_BOOKS_SET_LENGTH = 0;
  booksList: BookInterface[];

  constructor(private store: Store) {}

  bookData = {
    'id': 1,
    'title': 'pop',
    'books': [
      {
        'name': 'BOOK',
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
        'decsription': 'dvsdvsdvsdvsdvs',
        'imgUrl': 'http://zoozel.ru/gallery/images/1450476_spat-hochetsya-chehov.jpg',
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
      }
    ]
  };

  getReducedBooksSet(): BookInterface[] {
    return this.bookData.books.slice(this.MAX_BOOKS_SET_LENGTH, -1);
  }

  ngOnInit(): void {
    this.getReducedBooksSet()
  }
}
