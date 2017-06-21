import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ImgurService {

	private apiBaseUrl= 'https://api.imgur.com/3/';
	private clientId = '5d9313d508a01da';
	private gallery = 'aww';

	private imageUrls = [];

	constructor (private http: Http) {}

	getImages(page = 0, limit = 12): Observable<string[]>{

		return new Observable(observable => {

			console.log(page*limit + " : " + this.imageUrls.length);
			//Check if we already have paged amount of images
			if(page*limit < this.imageUrls.length){

				let images = this.imageUrls.slice(page*limit, limit + page*limit);

				observable.next(images);
			    observable.complete();

			}
			else{

				//fetch some more image urls
				let url = this.apiBaseUrl + 'gallery/r/' + this.gallery + '?page='+ page;
				let options = this.getAuthenticationOptions();

				let request = this.http.get(url, options)
	                .map( res => {

	                	//only want the image urls
	                	return res.json().data
	                		//Only want image extensions
	                		.filter(x => x.link.endsWith(".jpg") || x.link.endsWith(".png"))
	                		//Only care about the link
	                		.map(imageData =>  imageData.link);


	                })
	                .catch(this.handleError)
					.subscribe(res => {

						//Update the cached urls
						if(this.imageUrls.length > 0){
	            			this.imageUrls = this.imageUrls.concat(res);
						}else{
							this.imageUrls = res;
						}

                    	let images = this.imageUrls.slice(page*limit, limit + page*limit);
				    	observable.next(images);

	            	}, err => {});

	                    
			}

		});
		

	}

	private getAuthenticationOptions(): any{
		let headers = new Headers({ 'authorization': 'Client-ID ' + this.clientId });
        return new RequestOptions({ headers: headers });
	}

	//Standard documentation error handling
	private handleError (error: Response | any) {

	  let errMsg: string;

	  if (error instanceof Response) {

	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

	  } else {

	    errMsg = error.message ? error.message : error.toString();

	  }

	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}
}