import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MosaicService {

	imageUrl = '';

	img = '';

	imageProcessedSource = new Subject<any>();
	imageProcessed$ = this.imageProcessedSource.asObservable();

	selectImageUrl(url){

		this.imageUrl = url;

		//transform url into image
		this.toDataURL(url, data => {

			this.img = data;

			//alert all components using this image that it has been updated
			this.imageProcessedSource.next(this.img);

		}, "image/png");

	}

	getImageData(){
		return this.img;
	}

	selectImageData(imgData){
		this.img = imgData;
		this.imageProcessedSource.next(this.img);
	}

	watchForChanges(): Observable<any>{
		return this.imageProcessed$;
	}

	//https://stackoverflow.com/questions/22172604/convert-image-url-to-base64
	getBase64Image(imgUrl) {
      var img = new Image();
	  img.src = imgUrl;
	  var canvas = document.createElement("canvas");
	  canvas.width = img.width;
	  canvas.height = img.height;
	  var ctx = canvas.getContext("2d");
	  ctx.drawImage(img, 0, 0);
	  var dataURL = canvas.toDataURL("image/png");
	  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

	
	toDataURL(src, callback, outputFormat) {
	  var img = new Image();
	  img.crossOrigin = 'Anonymous';
	  img.onload = function() {
	    var canvas : any = document.createElement('CANVAS');
	    var ctx = canvas.getContext('2d');
	    var dataURL;
	    canvas.height = img.height;
	    canvas.width = img.width;
	    ctx.drawImage(this, 0, 0);
	    dataURL = canvas.toDataURL(outputFormat);
	    callback(dataURL);
	  };
	  img.src = src;
	  if (img.complete || img.complete === undefined) {
	    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
	    img.src = src;
	  }
	}
}