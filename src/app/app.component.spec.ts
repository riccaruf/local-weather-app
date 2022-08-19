import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ICurrentWeather } from './interfaces';

import { WeatherServiceFake } from './weather/weather.service.fake';
import { WeatherService } from './weather/weather.service';

describe('AppComponent', () => {
  let service: WeatherServiceFake;
  let current: ICurrentWeather;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //imports: [ HttpClientTestingModule ],
      providers: [{
        provide : WeatherService,
        useClass : WeatherServiceFake
      }],
      declarations: [
        AppComponent,
        CurrentWeatherComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
