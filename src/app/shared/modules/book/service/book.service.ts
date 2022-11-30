import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { GetBookResponseInterface } from '../types/getBookResponse.interface';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {
  }
  getBook(url: string): Observable<GetBookResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetBookResponseInterface>(fullUrl);
  }
}
