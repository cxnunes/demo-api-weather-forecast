import {API} from '../../utils/api'
import {City} from '../cities/type'
import {DailyForecast} from './type'

const apiKey = process.env.API_KEY || ''
const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1'

const getForecast1Day = async (city: City) => {
  const data = await API.get(`${baseUrl}/daily/1day/${city.key}?apikey=${apiKey}`)
  return data.DailyForecasts.map((f: any) => toForecast(city.name, f))
}

export const toForecast = (name: string, obj: any): DailyForecast | null => {
  if (!obj.Temperature) return null
  return {
    city: name || '',
    date: obj.Date,
    minTemp: `${obj.Temperature.Minimum.Value} ${obj.Temperature.Minimum.Unit}`,
    maxTemp: `${obj.Temperature.Maximum.Value} ${obj.Temperature.Maximum.Unit}`,
    day: `${obj.Day.IconPhrase}, ${obj.Day.HasPrecipitation ? 'with rain :(' : 'no rain :)'}`,
    evening: `${obj.Night.IconPhrase}, ${
      obj.Night.HasPrecipitation ? 'with rain :(' : 'no rain :)'
    }`,
  }
}

export const ForecastAPI = {
  getForecast1Day,
}
