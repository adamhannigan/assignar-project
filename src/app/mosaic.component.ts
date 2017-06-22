import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { MosaicService } from './mosaic.service';

@Component({
  selector: 'mosaic',
  templateUrl: './mosaic.component.html',
})
export class MosaicComponent {

	//@ViewChild("mosaicCanvas") mosaicCanvas: ElementRef; 
	//private canvas: any;

	imgSrc = "";

	context:CanvasRenderingContext2D;

	showUpload = false;

	constructor(private mosaicService: MosaicService, private applicationRef: ApplicationRef){}

	ngAfterViewInit() {
        //this.canvas = this.mosaicCanvas.nativeElement;
		//this.context = this.canvas.getContext("2d");

    }

	ngOnInit(){

		this.imgSrc = this.mosaicService.getImageData();

	}

	uploadClose(){
		this.showUpload = false;
	}
}
