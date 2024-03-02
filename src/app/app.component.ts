import { Component, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, CommonModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  weatherList: any = [];
  weatherService: WeatherService = inject(WeatherService);

constructor() {
  this.getWeatherForCity('Rio de Janeiro');
}

async getWeatherForCity(city: string) {
  const data = await this.weatherService.getWeatherForCity(city);
  this.weatherList = data.list.slice(0, 6);
}

handleTabChange(event: any) {
  console.log("event; ", event.tab.textLabel);
  this.getWeatherForCity(event.tab.textLabel);
}
}
