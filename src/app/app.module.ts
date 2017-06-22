import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination.component';
import { AlbumComponent } from './album.component';
import { MosaicComponent } from './mosaic.component';
import { UploadComponent } from './upload.component';
import { routes } from './app.routes';

//Third party libraries
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    MosaicComponent,
    PaginationComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
