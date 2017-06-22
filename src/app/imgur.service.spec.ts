import {TestBed, inject, tick} from '@angular/core/testing';
import {ImgurService} from './imgur.service';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions} from '@angular/http';

describe('Service: Item', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: RequestOptions, useClass: BaseRequestOptions},
                    {provide: ConnectionBackend, useClass: MockBackend},
                    Http,
                    ImgurService
                ]
            });
        });

        it('should inject the service', inject([ImgurService], (service: ImgurService) => {
            expect(service).toBeTruthy();
        }));

        it('should get all items from the backend', inject([ConnectionBackend, ImgurService],
            (backend: MockBackend,
             service: ImgurService) => {
                // Arrange
                let items = null;
                backend.connections.subscribe((c: MockConnection) => {
                    expect(c.request.url).toEqual('https://api.imgur.com/3/gallery/r/aww?page=0');
                    c.mockRespond(new Response(new ResponseOptions({body: '[{"item":"Test"}]'})));
                });

                //TODO implement correctly
                /* Act
                service.getImages().subscribe((q) => {
                    items = q;
                });

                // Assert
                backend.verifyNoPendingRequests();
                expect(items).toEqual([{item:'Test'}]);
                */
            }));
    });