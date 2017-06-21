import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { MosaicService } from './mosaic.service';

@Component({
  selector: 'mosaic',
  templateUrl: './mosaic.component.html',
})
export class MosaicComponent {

	@ViewChild("mosaicCanvas") mosaicCanvas: ElementRef; 
	private canvas: any;

	context:CanvasRenderingContext2D;

	constructor(private mosaicService: MosaicService, private applicationRef: ApplicationRef){}

	ngAfterViewInit() {
        this.canvas = this.mosaicCanvas.nativeElement;
		this.context = this.canvas.getContext("2d");

    }

	ngOnInit(){


		//watch for changes to image
		this.mosaicService.watchForChanges().subscribe(
			imageData => {

				this.context.beginPath();
				this.context.arc(100, 75, 50, 0, 2 * Math.PI);
				this.context.stroke();

				this.applicationRef.tick()
				/*
				let windowHere : any = window;
				var DOMURL = windowHere.URL || windowHere.webkitURL || windowHere;

				var img = new Image();
				var svg = new Blob([imageData], {type: 'image/svg+xml'});
				var url = DOMURL.createObjectURL(svg);

				img.onload = function() {
					console.log("1");
				    ctx.drawImage(img, 0, 0);
				    DOMURL.revokeObjectURL(url);
					console.log("2");
				}

				img.src = url;

				console.log("Made image: " + img.src);
				this.mosaicCanvas.nativeElement.appendChild(img);
				console.log("We did");
				*/

			});

	}
}
