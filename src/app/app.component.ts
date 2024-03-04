import { Component, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    WeatherComponent,
    ForecastComponent,
    CommonModule,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
  isSearchVisible = false;
  searchValue: string = '';
  next5Days = [];
  weatherList: any = [];
  lastUpdatedOn = new Date();
  searched: string = '';
  weatherService: WeatherService = inject(WeatherService);

  constructor() {
    this.getWeatherForCity('Rio de Janeiro');
  }

  async getWeatherForCity(city: string) {
    const data = await this.weatherService.getWeatherForCity(city);
    this.weatherList = data.list.slice(0, 6);

    const resultArray: any = [];

    function isDatePresent(date: any) {
      return resultArray.some((entry: any) => entry.dt_txt === date);
    }

    // Process each item in the weatherData array
    data.list.forEach((entry: any) => {
      let dtTxt = entry.dt_txt.split(' ')[0];
      let weatherStatus = entry.weather[0].description;
      let weatherIcon = entry.weather[0].icon;
      let tempMax = entry.main.temp_max;
      let tempMin = entry.main.temp_min;

      if (!isDatePresent(dtTxt)) {
        let resultEntry = {
          dt_txt: dtTxt,
          most_occuring_weather: {
            weather_status: weatherStatus,
            weather_icon: weatherIcon,
          },
          temp_max: tempMax,
          temp_min: tempMin,
          weather_status_frequency: { [weatherStatus]: 1 },
        };
        resultArray.push(resultEntry);
      } else {
        resultArray.forEach((existingEntry: any) => {
          if (existingEntry.dt_txt === dtTxt) {
            existingEntry.temp_max = Math.max(existingEntry.temp_max, tempMax);
            existingEntry.temp_min = Math.min(existingEntry.temp_min, tempMin);

            existingEntry.weather_status_frequency[weatherStatus] =
              (existingEntry.weather_status_frequency[weatherStatus] || 0) + 1;

            // Check the most occurring weather_status
            let mostOccurringStatus = Object.keys(
              existingEntry.weather_status_frequency
            ).reduce((a, b) =>
              existingEntry.weather_status_frequency[a] >
              existingEntry.weather_status_frequency[b]
                ? a
                : b
            );
            existingEntry.most_occuring_weather.weather_status =
              mostOccurringStatus;

            // Update the corresponding most occurring weather_icon
            const mostOccurringWeather = data.list.find(
              (item: any) =>
                item.dt_txt.startsWith(dtTxt) &&
                item.weather[0].description === mostOccurringStatus
            );

            existingEntry.most_occuring_weather.weather_icon =
              mostOccurringWeather.weather[0].icon;
          }
        });
      }
    });

    this.next5Days = resultArray;
    this.lastUpdatedOn = new Date();
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  submitSearch() {
    this.getWeatherForCity(this.searchValue);
    this.searched = this.searchValue;
    this.isSearchVisible = false;
    this.searchValue = '';
  }

  handleTabChange(event: any) {
    this.getWeatherForCity(event.tab.textLabel);
  }
}
