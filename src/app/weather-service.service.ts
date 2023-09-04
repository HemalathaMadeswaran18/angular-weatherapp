import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=2c1734d0a8fd470da3881718230409&q=London');
  }
  getWeatherofloc(country:any){
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=2c1734d0a8fd470da3881718230409&q=${country}`);
  }





}
