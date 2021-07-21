//import {singleDayForecast} from '../../data/1-day-forecast'
import {toForecast} from './mappers/weather-api.mappers'
import {API} from '../../utils/api'

const apiKey = process.env.API_KEY || ''
const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1'

const getForecast1Day = async (key: string) => {
  const data = await API.get(`${baseUrl}/daily/1day/${key}?apikey=${apiKey}`)
  return data.DailyForecasts.map((f: any) => toForecast(key, f))
}

export const WeatherAPI = {
  getForecast1Day,
}
