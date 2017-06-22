import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ImgurService } from './imgur.service';
import { MosaicService } from './mosaic.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent {
  title = 'app';

  imageUrls = [];

  selected = '';

  constructor(private imgurService: ImgurService, private router: Router, private mosaicService: MosaicService){}

  ngOnInit(){
  	this.loadImages(0);
  }

  loadImages(page){
    console.log("COM LOAD: " + page);
  	//load them
  	this.imgurService.getImages(page)
  		.subscribe(
  			res => {
          this.imageUrls = res;
  			},
  			err => {

  			});
  }

  pageChanged(page: number){

    //since paging starts at 0
    let imagePage = page - 1;
    this.selected = '';
   
    this.loadImages(imagePage);
  }

  selectImage(url){
    
    this.mosaicService.selectImageUrl(url);
    this.selected = url;
  }

  imageUploaded(event){
    this.selected = event.src;
    this.mosaicService.selectImageData(event.src);
  }

  imageRemove(event){
    this.selected = '';
  }

  createMosaic(){
    this.router.navigate(['/mosaic']);
  }


}
