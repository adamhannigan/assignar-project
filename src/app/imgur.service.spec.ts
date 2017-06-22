import { HttpModule } from '@angular/http';
import { ImgurService } from './imgur.service';
import { TestBed, inject } from '@angular/core/testing';

TestBed.configureTestingModule({
  imports: [HttpModule],
  providers: [
    ImgurService
  ]
});

describe('ImgurService', () => {

	beforeEach(() => {
	    TestBed.configureTestingModule({
	      providers: [
	        ImgurService, 
	        HttpModule
	      ]
	    });
	  });


    it('should return an Observable<string[]>',
	  inject([ImgurService], (imgurService) => {

	    imgurService.getImages().subscribe((videos) => {
	      expect(videos.length).toBe('asyncValue');
	    });
	}));

});