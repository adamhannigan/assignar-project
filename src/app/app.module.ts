import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination.component';
import { AlbumComponent} from './album.component';
import {MosaicComponent} from './mosaic.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    MosaicComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
