import {getCityNameByKey} from '../cities-api'

interface DailyForecast {
  city: string
  date: string
  minTemp: string
  maxTemp: string
  day: string
  evening: string
}

export const toForecast = (key: string, obj: any): DailyForecast | null => {
  if (!obj.Temperature) return null
  return {
    city: getCityNameByKey(key) || '',
    date: obj.Date,
    minTemp: `${obj.Temperature.Minimum.Value} ${obj.Temperature.Minimum.Unit}`,
    maxTemp: `${obj.Temperature.Maximum.Value} ${obj.Temperature.Maximum.Unit}`,
    day: `${obj.Day.IconPhrase}, ${obj.Day.HasPrecipitation ? 'with rain :(' : 'no rain :)'}`,
    evening: `${obj.Night.IconPhrase}, ${
      obj.Night.HasPrecipitation ? 'with rain :(' : 'no rain :)'
    }`,
  }
}
