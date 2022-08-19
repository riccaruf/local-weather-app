import { Observable } from "rxjs";

export interface ICurrentWeather {
    city: string,
    country: string,
    date: Date,
    image: string,
    temperature: number,
    description: string
}

export interface IWeatherService {
    getCurrentWeather (city:string, country:string): Observable<ICurrentWeather>
}

export interface ICurrentWeatherData {
    weather:[{
      description:string,
      icon:string
    }],
    main:{
      temp:number
    },
    sys:{
      country:string
    },
    dt:number,
    name:string
 }
  
