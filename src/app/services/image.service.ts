import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ImageService {

    constructor(
        private _http: HttpClient
    ) { }

    public getImageOfTheDay(): Observable<string> {

        return this._http.get<any>(`https://api.nasa.gov/planetary/apod`, {
            params: {
                api_key: 'lWDf8cjsIXEw5hlCvK3oY6vQlel0PzqvjpwdaBdd'
            }
        }).pipe(
            map(res => res.url)
        );

        return null;
    }
}


// res.images[0].url