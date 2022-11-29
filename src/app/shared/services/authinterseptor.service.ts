import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PersistanceService } from './persistance.service';

@Injectable()
export class AuthInterseptor implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('tokenName');
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });
    return next.handle(req);
  }

}
