//Model for uploading to imgur
export class ImgurImage{
	
	public type: string = "base64";

	constructor(
		public image: string,
		public title: string,
		public description: string
	){}
}