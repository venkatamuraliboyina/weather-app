import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }
  
  async getWeatherForCity(city: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=482944e26d320a80bd5e4f23b3de7d1f`;
    const data = await fetch(url);
    return await data.json();
  }

}
