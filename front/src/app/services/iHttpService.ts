import { HttpService } from './HttpService';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class IHttpService implements HttpService {

    constructor(public http: Http) { }

    read(url: string) {
      return this.http.get(url).map(res => res.json());
    }
}
