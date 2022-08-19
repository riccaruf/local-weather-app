import { TestBed } from '@angular/core/testing';

import { WeatherServiceFake } from './weather.service.fake';

import { WeatherService } from './weather.service';

import { ICurrentWeather } from '../interfaces';

describe('WeatherService', () => {
  let service: WeatherServiceFake;
  let current: ICurrentWeather;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //imports: [ HttpClientTestingModule ]
      providers: [{
        provide : WeatherService,
        useClass : WeatherServiceFake
      }]
    });

    service = TestBed.inject(WeatherService);
    current = {
      city:"",
      country:"",
      date: new Date(),
      description: "",
      image: "",
      temperature: 0
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('The fake city should be Modena', ()=>{
    service.getCurrentWeather('x','y').subscribe((data)=>{current = data})
    
    // the value is always the fake one
    expect(current.city).toEqual("Modena");
  })
});
