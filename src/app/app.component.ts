import { Component } from '@angular/core';
import { ImgurService } from './imgur.service';
import { MosaicService } from './mosaic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
  	ImgurService,
  	MosaicService
  ]
})
export class AppComponent {
  title = 'Mosaic Maker 3000';
}
