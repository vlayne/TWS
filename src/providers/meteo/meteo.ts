import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MeteoProvider Provider');
  }
  getMeteo(city) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3e94d8411d431b0514ab96aaf336185f`)
  }
  getForecast = city => {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=3e94d8411d431b0514ab96aaf336185f`);
  }
}
