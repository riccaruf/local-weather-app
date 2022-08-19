import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';

import { WeatherServiceFake } from '../weather/weather.service.fake'
import { WeatherService } from '../weather/weather.service';


describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let service: WeatherServiceFake;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide : WeatherService,
        useClass : WeatherServiceFake
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
