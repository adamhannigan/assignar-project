import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MosaicService } from './mosaic.service';
import { ImgurService } from './imgur.service';
import {ImgurImage} from './imgur-image';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {

	@Output()
  	private onClose = new EventEmitter<number>();

	model = new ImgurImage("","","");

	uploading = false;

	link = '';

	constructor(private mosaicService: MosaicService, private imgurService: ImgurService){}

	close(){
		this.onClose.emit();
	}

	onSubmit(){

		let imgData = this.mosaicService.getImageData().substring(22);
		let imageModel = new ImgurImage(imgData, this.model.title, this.model.description);

		this.uploading = true;

		this.imgurService.uploadImage(imageModel)
			.subscribe(res => {
				this.uploading = false;
				this.link = res.toString();
			})
	}
}
