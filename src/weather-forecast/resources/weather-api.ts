import {singleDayForecast} from '@modules/data/1-day-forecast'
import {toForecast} from './mappers/weather-api.mappers'
import {API} from '@modules/utils/api'

const apiKey = process.env.API_KEY || ''
const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1'

const getForecast1Day = async (key: string) => {
  //const data = await API.get(`${baseUrl}/daily/1day/${locationKey}?apikey=${apiKey}`)
  return singleDayForecast.DailyForecasts.map((f) => toForecast(key, f))
  // return data.DailyForecasts.map(toForecast)
}

export const WeatherAPI = {
  getForecast1Day,
}
