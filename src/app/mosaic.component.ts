import { Component } from '@angular/core';
import { MosaicService } from './mosaic.service';

@Component({
  selector: 'mosaic',
  templateUrl: './mosaic.component.html',
})
export class MosaicComponent {


	imgSrc = "";

	context:CanvasRenderingContext2D;

	showUpload = false;

	constructor(private mosaicService: MosaicService){}

	ngOnInit(){

		this.imgSrc = this.mosaicService.getImageData();

	}

	uploadClose(){
		this.showUpload = false;
	}
}
