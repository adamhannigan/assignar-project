import { RouterTestingModule } from '@angular/router/testing';
import {AppComponent} from './app.component';


describe('Sanity Test', () => {
 it('true is true', () => expect(true).toBe(true)); 
});


describe('AppComponent', () => {
 beforeEach(function() {
   this.app = new AppComponent();
 });

 it('should have title property', function() {
   expect(this.app.title).toBe('Mosaic Maker 3000');
 });
});