import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumComponent} from './album.component';
import {MosaicComponent} from './mosaic.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    MosaicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
