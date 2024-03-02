import { Component, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, ForecastComponent, CommonModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  next5Days = [];
  weatherList: any = [];
  lastUpdatedOn = new Date();
  weatherService: WeatherService = inject(WeatherService);

constructor() {
  this.getWeatherForCity('Rio de Janeiro');
}

async getWeatherForCity(city: string) {
  const data = await this.weatherService.getWeatherForCity(city);
  this.weatherList = data.list.slice(0, 6);
  this.next5Days = data.list.reduce((acc:any, cur:any) => {
    const date = cur.dt_txt.split(" ")[0];
    const found = acc.find((x:any) => x.dt_txt.split(" ")[0] === date);
    if (found) {

    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  this.next5Days.splice(0, 1);

  console.log(this.next5Days);
  this.lastUpdatedOn = new Date();
}

handleTabChange(event: any) {
  this.getWeatherForCity(event.tab.textLabel);
}
}
