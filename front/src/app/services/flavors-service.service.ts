import { IHttpService } from './IHttpService';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MyConfig } from '../config/MyConfig';
import 'rxjs/Rx';
import { Flavor } from '../entities/Flavor';

@Injectable()
export class FlavorsService extends IHttpService {

  readAll() {
    return super.read(MyConfig.endpoint.products + '/getAll');
  }

}
