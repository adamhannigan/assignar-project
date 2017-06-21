import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MosaicService {

	imageUrl = '';

	imageProcessedSource = new Subject<any>();
	imageProcessed$ = this.imageProcessedSource.asObservable();

	selectImageUrl(url){
		this.imageUrl = url;

		/*
		let image = document.createElement('img');
		image.src = url;

		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext("2d");
    	ctx.drawImage(image,10,10);
    	*/

		let wassup = '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /</svg>';
		//alert all components using this image that it has been updated
		this.imageProcessedSource.next(wassup)
	}

	watchForChanges(): Observable<any>{
		return this.imageProcessed$;
	}

	processImage(){
		console.log("Lets process");
	}
}