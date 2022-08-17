import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current:ICurrentWeather

  constructor(private weatherService: WeatherService ) { 
    
    this.current = {
      city:"Modena",
      country:"Italy",
      date: new Date(),
      description: "Sunny",
      image: "assets/img/sunny.png",
      temperature: 20

    }as ICurrentWeather
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Bologna','Italy').subscribe((data)=>{
      this.current = data;
    })
  }
  

}
