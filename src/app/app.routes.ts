import {Routes } from '@angular/router';
import { AlbumComponent} from './album.component';
import {MosaicComponent} from './mosaic.component';

export const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'mosaic', component: MosaicComponent }
];

