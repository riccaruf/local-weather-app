import { Observable, of } from 'rxjs';

import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from '../interfaces';


export const fakeWeather : ICurrentWeather = {
  city: 'Modena',
  country: 'Italy',
  date: new Date(),
  image: 'assets/img/sunny.png',
  temperature: 30,
  description: 'Fake service value'
}


export class WeatherServiceFake implements IWeatherService {
  
  getCurrentWeather (city:string, country:string): Observable<ICurrentWeather> {
    
    return of(fakeWeather)
      
  }
}
