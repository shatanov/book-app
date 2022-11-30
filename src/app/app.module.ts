import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterseptor } from './shared/services/authinterseptor.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { environment } from '../environments/environment';
import { BooksSetModule } from './booksSet/booksSet.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    TopBarModule,
    BooksSetModule
  ],
  providers: [PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
