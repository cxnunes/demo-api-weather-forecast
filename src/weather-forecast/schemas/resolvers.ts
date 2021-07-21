import {WeatherAPI} from 'weather-forecast/resources/weather-api'

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    weather: () => WeatherAPI.getForecast1Day('249758'),
  },
}
