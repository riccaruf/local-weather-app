import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from '../interfaces';
import { ICurrentWeatherData } from '../interfaces';

import { map } from 'rxjs/operators' 


@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  private convertKelvinToCelsius (kelvin:number): number{
    
    var celsius = kelvin - 273.15;
    return celsius;
  }

  private transformToICurrentWeather (data:ICurrentWeatherData): ICurrentWeather{
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt),
      description: data.weather[0].description,
      temperature: this.convertKelvinToCelsius(data.main.temp),
      image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    }
  }

  getCurrentWeather (city:string, country:string): Observable<ICurrentWeather> {
    
    console.log("- get current weather");
    
    const uriParam = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', `${environment.appId}`)
    
    return this.httpClient
      .get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,{params : uriParam})
      .pipe(map(data => this.transformToICurrentWeather(data)))
      
  }
}
