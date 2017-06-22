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

	//Loads image url and processes into mosaic
	selectImageUrl(url){

		this.imageUrl = url;

		//transform url/data into image
		this.toMosaic(url, data => {

			this.img = data;

			//alert all components using this image that it has been updated
			this.imageProcessedSource.next(this.img);

		}, "image/png");

	}

	getImageData(){
		return this.img;
	}

	//Used for components watching for changes on mosaic 
	watchForChanges(): Observable<any>{
		return this.imageProcessed$;
	}
	
	//converts image into mosaic
	toMosaic(src, callback, outputFormat) {
	  var img = new Image();
	  img.crossOrigin = 'Anonymous';
	  img.onload = function() {

	  	//load image into canvas so we can read the data
	    var canvas : any = document.createElement('CANVAS');
	    var ctx = canvas.getContext('2d');
	    var dataURL;
	    canvas.height = img.height;
	    canvas.width = img.width;
	    ctx.drawImage(this, 0, 0);

	    //create canvas to draw to
	    var mosaicCanvas : any = document.createElement('CANVAS');
	    var mosaicContext = mosaicCanvas.getContext('2d');
	    mosaicCanvas.width = img.width;
	    mosaicCanvas.height = img.height;

	    var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		var data = imgData.data;

		let tileSize = 16;

		//loop through row 64 pixels at time and get columns 64 pixels
		for(let pixelBlock = tileSize/2; pixelBlock < canvas.width; pixelBlock += tileSize)
		{
			//Go through each column 64 blocks at a time
			for(let columnBlock = tileSize/2; columnBlock < canvas.height; columnBlock += tileSize)
			{

				//get color in middle of square - should be averaging but takes to long on large images
				let index = (pixelBlock + (columnBlock * imgData.width)) * 4;
				let red = data[index];
				let green = data[index + 1];
				let blue = data[index + 2];

				mosaicContext.beginPath();

				//draw circle and fill with middle color
				mosaicContext.arc( columnBlock, pixelBlock, tileSize/2,0,2*Math.PI);
				mosaicContext.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
				mosaicContext.fill();

			}
		}

	    dataURL = mosaicCanvas.toDataURL(outputFormat);

	    callback(dataURL);

	  };
	  img.src = src;
	  if (img.complete || img.complete === undefined) {
	    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
	    img.src = src;
	  }
	}
}