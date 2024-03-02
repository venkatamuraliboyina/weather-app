import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  weatherList: any = [];
  weatherService: WeatherService = inject(WeatherService);

  async getWeatherData() {
  this.weatherList =[
      {
        dt: 1709402400,
        main: {
          temp: 293.69,
          feels_like: 293.5,
          temp_min: 293.69,
          temp_max: 293.7,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1005,
          humidity: 65,
          temp_kf: -0.01,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 3.91,
          deg: 162,
          gust: 5.04,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-02 18:00:00',
      },
      {
        dt: 1709413200,
        main: {
          temp: 294.82,
          feels_like: 294.56,
          temp_min: 294.82,
          temp_max: 297.08,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1002,
          humidity: 58,
          temp_kf: -2.26,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 4.24,
          deg: 169,
          gust: 5.63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-02 21:00:00',
      },
      {
        dt: 1709424000,
        main: {
          temp: 292.43,
          feels_like: 292.16,
          temp_min: 291.8,
          temp_max: 292.43,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1001,
          humidity: 67,
          temp_kf: 0.63,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 3.35,
          deg: 142,
          gust: 6.65,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-03 00:00:00',
      },
      {
        dt: 1709434800,
        main: {
          temp: 288.31,
          feels_like: 287.92,
          temp_min: 288.31,
          temp_max: 288.31,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1002,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 16,
        },
        wind: {
          speed: 3.35,
          deg: 158,
          gust: 8.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-03 03:00:00',
      },
      {
        dt: 1709445600,
        main: {
          temp: 287.65,
          feels_like: 287.35,
          temp_min: 287.65,
          temp_max: 287.65,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1002,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 26,
        },
        wind: {
          speed: 4.59,
          deg: 156,
          gust: 13.09,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-03 06:00:00',
      },
      {
        dt: 1709456400,
        main: {
          temp: 287.69,
          feels_like: 287.63,
          temp_min: 287.69,
          temp_max: 287.69,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1001,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 3.31,
          deg: 183,
          gust: 10.58,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-03 09:00:00',
      },
      {
        dt: 1709467200,
        main: {
          temp: 286.49,
          feels_like: 286.41,
          temp_min: 286.49,
          temp_max: 286.49,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1002,
          humidity: 97,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 2.93,
          deg: 169,
          gust: 9.77,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-03 12:00:00',
      },
      {
        dt: 1709478000,
        main: {
          temp: 291.17,
          feels_like: 291.14,
          temp_min: 291.17,
          temp_max: 291.17,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 10,
        },
        wind: {
          speed: 4.32,
          deg: 188,
          gust: 8.21,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-03 15:00:00',
      },
      {
        dt: 1709488800,
        main: {
          temp: 297.44,
          feels_like: 297.26,
          temp_min: 297.44,
          temp_max: 297.44,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1002,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 4.67,
          deg: 186,
          gust: 6.5,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-03 18:00:00',
      },
      {
        dt: 1709499600,
        main: {
          temp: 299.77,
          feels_like: 299.77,
          temp_min: 299.77,
          temp_max: 299.77,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 999,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 14,
        },
        wind: {
          speed: 5,
          deg: 185,
          gust: 6.88,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-03 21:00:00',
      },
      {
        dt: 1709510400,
        main: {
          temp: 294.48,
          feels_like: 294.29,
          temp_min: 294.48,
          temp_max: 294.48,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 998,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 24,
        },
        wind: {
          speed: 3.43,
          deg: 158,
          gust: 6.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-04 00:00:00',
      },
      {
        dt: 1709521200,
        main: {
          temp: 291.7,
          feels_like: 291.46,
          temp_min: 291.7,
          temp_max: 291.7,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 999,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 3.54,
          deg: 169,
          gust: 10.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-04 03:00:00',
      },
      {
        dt: 1709532000,
        main: {
          temp: 291.52,
          feels_like: 291.45,
          temp_min: 291.52,
          temp_max: 291.52,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1000,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 3.85,
          deg: 177,
          gust: 11.26,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-04 06:00:00',
      },
      {
        dt: 1709542800,
        main: {
          temp: 289.79,
          feels_like: 289.89,
          temp_min: 289.79,
          temp_max: 289.79,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1000,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 3.27,
          deg: 167,
          gust: 10.31,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-04 09:00:00',
      },
      {
        dt: 1709553600,
        main: {
          temp: 289.54,
          feels_like: 289.74,
          temp_min: 289.54,
          temp_max: 289.54,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1000,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 3.39,
          deg: 162,
          gust: 10.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-04 12:00:00',
      },
      {
        dt: 1709564400,
        main: {
          temp: 292.49,
          feels_like: 292.7,
          temp_min: 292.49,
          temp_max: 292.49,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1001,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.9,
          deg: 177,
          gust: 9.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-04 15:00:00',
      },
      {
        dt: 1709575200,
        main: {
          temp: 297.57,
          feels_like: 297.69,
          temp_min: 297.57,
          temp_max: 297.57,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1000,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.37,
          deg: 191,
          gust: 7.77,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-04 18:00:00',
      },
      {
        dt: 1709586000,
        main: {
          temp: 297.71,
          feels_like: 297.89,
          temp_min: 297.71,
          temp_max: 297.71,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 998,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.42,
          deg: 170,
          gust: 5.54,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-04 21:00:00',
      },
      {
        dt: 1709596800,
        main: {
          temp: 294.92,
          feels_like: 295.14,
          temp_min: 294.92,
          temp_max: 294.92,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 998,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.97,
          deg: 171,
          gust: 6.78,
        },
        visibility: 10000,
        pop: 0.63,
        rain: {
          '3h': 0.57,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-05 00:00:00',
      },
      {
        dt: 1709607600,
        main: {
          temp: 292.28,
          feels_like: 292.57,
          temp_min: 292.28,
          temp_max: 292.28,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 998,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.81,
          deg: 154,
          gust: 6.99,
        },
        visibility: 10000,
        pop: 0.42,
        rain: {
          '3h': 0.13,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-05 03:00:00',
      },
      {
        dt: 1709618400,
        main: {
          temp: 290.93,
          feels_like: 291.27,
          temp_min: 290.93,
          temp_max: 290.93,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 997,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.91,
          deg: 191,
          gust: 4.54,
        },
        visibility: 2196,
        pop: 0.94,
        rain: {
          '3h': 3.61,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-05 06:00:00',
      },
      {
        dt: 1709629200,
        main: {
          temp: 288.41,
          feels_like: 288.45,
          temp_min: 288.41,
          temp_max: 288.41,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 997,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 502,
            main: 'Rain',
            description: 'heavy intensity rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.48,
          deg: 358,
          gust: 8.06,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 16.45,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-05 09:00:00',
      },
      {
        dt: 1709640000,
        main: {
          temp: 287.97,
          feels_like: 287.94,
          temp_min: 287.97,
          temp_max: 287.97,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 997,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.67,
          deg: 78,
          gust: 1.87,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 0.9,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-05 12:00:00',
      },
      {
        dt: 1709650800,
        main: {
          temp: 291.16,
          feels_like: 291.03,
          temp_min: 291.16,
          temp_max: 291.16,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 999,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 42,
        },
        wind: {
          speed: 2.04,
          deg: 71,
          gust: 3.46,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-05 15:00:00',
      },
      {
        dt: 1709661600,
        main: {
          temp: 296.48,
          feels_like: 296.33,
          temp_min: 296.48,
          temp_max: 296.48,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 999,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 21,
        },
        wind: {
          speed: 2.67,
          deg: 42,
          gust: 3.71,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-05 18:00:00',
      },
      {
        dt: 1709672400,
        main: {
          temp: 297.95,
          feels_like: 297.84,
          temp_min: 297.95,
          temp_max: 297.95,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 997,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.31,
          deg: 49,
          gust: 2.52,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-05 21:00:00',
      },
      {
        dt: 1709683200,
        main: {
          temp: 293.93,
          feels_like: 293.89,
          temp_min: 293.93,
          temp_max: 293.93,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 997,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 9,
        },
        wind: {
          speed: 2.42,
          deg: 85,
          gust: 3.06,
        },
        visibility: 10000,
        pop: 0.03,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-06 00:00:00',
      },
      {
        dt: 1709694000,
        main: {
          temp: 290.21,
          feels_like: 290.14,
          temp_min: 290.21,
          temp_max: 290.21,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 999,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 2.63,
          deg: 77,
          gust: 4.24,
        },
        visibility: 10000,
        pop: 0.38,
        rain: {
          '3h': 0.33,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-06 03:00:00',
      },
      {
        dt: 1709704800,
        main: {
          temp: 288.89,
          feels_like: 288.84,
          temp_min: 288.89,
          temp_max: 288.89,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1000,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.71,
          deg: 72,
          gust: 6.49,
        },
        visibility: 10000,
        pop: 0.57,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-06 06:00:00',
      },
      {
        dt: 1709715600,
        main: {
          temp: 287.29,
          feels_like: 287.24,
          temp_min: 287.29,
          temp_max: 287.29,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1000,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 58,
        },
        wind: {
          speed: 2.85,
          deg: 76,
          gust: 7.87,
        },
        visibility: 10000,
        pop: 0.3,
        rain: {
          '3h': 0.1,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-06 09:00:00',
      },
      {
        dt: 1709726400,
        main: {
          temp: 285.91,
          feels_like: 285.75,
          temp_min: 285.91,
          temp_max: 285.91,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1002,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 30,
        },
        wind: {
          speed: 2.28,
          deg: 71,
          gust: 6.91,
        },
        visibility: 10000,
        pop: 0.5,
        rain: {
          '3h': 0.54,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-06 12:00:00',
      },
      {
        dt: 1709737200,
        main: {
          temp: 289.34,
          feels_like: 289.23,
          temp_min: 289.34,
          temp_max: 289.34,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1004,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 21,
        },
        wind: {
          speed: 4.73,
          deg: 75,
          gust: 7.14,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-06 15:00:00',
      },
      {
        dt: 1709748000,
        main: {
          temp: 294,
          feels_like: 293.81,
          temp_min: 294,
          temp_max: 294,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1003,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 31,
        },
        wind: {
          speed: 4.14,
          deg: 79,
          gust: 4.52,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-06 18:00:00',
      },
      {
        dt: 1709758800,
        main: {
          temp: 295.63,
          feels_like: 295.4,
          temp_min: 295.63,
          temp_max: 295.63,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1002,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 84,
        },
        wind: {
          speed: 3.77,
          deg: 85,
          gust: 4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-06 21:00:00',
      },
      {
        dt: 1709769600,
        main: {
          temp: 291.8,
          feels_like: 291.63,
          temp_min: 291.8,
          temp_max: 291.8,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1001,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 3.73,
          deg: 76,
          gust: 8.7,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-07 00:00:00',
      },
      {
        dt: 1709780400,
        main: {
          temp: 289.61,
          feels_like: 289.19,
          temp_min: 289.61,
          temp_max: 289.61,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.12,
          deg: 84,
          gust: 12.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-07 03:00:00',
      },
      {
        dt: 1709791200,
        main: {
          temp: 288.14,
          feels_like: 287.86,
          temp_min: 288.14,
          temp_max: 288.14,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1004,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.46,
          deg: 112,
          gust: 9.46,
        },
        visibility: 10000,
        pop: 0.41,
        rain: {
          '3h': 0.21,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-07 06:00:00',
      },
      {
        dt: 1709802000,
        main: {
          temp: 286.65,
          feels_like: 286.54,
          temp_min: 286.65,
          temp_max: 286.65,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.61,
          deg: 95,
          gust: 9.31,
        },
        visibility: 6402,
        pop: 0.97,
        rain: {
          '3h': 3.17,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-07 09:00:00',
      },
      {
        dt: 1709812800,
        main: {
          temp: 286.19,
          feels_like: 286.06,
          temp_min: 286.19,
          temp_max: 286.19,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1002,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.12,
          deg: 115,
          gust: 10.19,
        },
        visibility: 8520,
        pop: 1,
        rain: {
          '3h': 5.08,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-03-07 12:00:00',
      },
      {
        dt: 1709823600,
        main: {
          temp: 286.2,
          feels_like: 286.02,
          temp_min: 286.2,
          temp_max: 286.2,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1002,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.74,
          deg: 114,
          gust: 11.65,
        },
        visibility: 10000,
        pop: 0.99,
        rain: {
          '3h': 2.19,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-03-07 15:00:00',
      },
    ];

}
constructor() {
  this.getWeatherData();
}
}
