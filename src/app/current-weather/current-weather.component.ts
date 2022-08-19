import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    let currentForecast : Observable<ICurrentWeather>;

    // get the Observable object form the API
    currentForecast = this.weatherService.getCurrentWeather('Bologna','Italy');
    // subscribe the Observable 
    /*
    The subscribe() method orchestrates a few important tasks for the observable behind the scenes:

    It accepts an observer object or callback functions as parameters.
    It converts the observer or callback functions to a SafeSubscriber object. SafeSubscriber extends the subscriber class which in turn extends the subscription class.
    It executes the observable function and passes the subscriber as an argument.
    It adds the observable’s teardown function to the subscriber object.
    And it returns the subscriber object, which, as we mentioned earlier, is of type subscription.
    */
    // this is a callback function and not ad observer object the implement next, error, etc...
    currentForecast.subscribe((data)=>{
      this.current = data;
    })
  }
  

}
