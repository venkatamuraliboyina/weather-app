import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = `https://api.openweathermap.org/data/2.5/forecast?lat=33.44&lon=-94.04&appid=482944e26d320a80bd5e4f23b3de7d1f`;
  constructor() { }

  async getWeatherForCity(): Promise<any> {
    const data = await fetch(this.url);
    return await data.json();
  }

}
