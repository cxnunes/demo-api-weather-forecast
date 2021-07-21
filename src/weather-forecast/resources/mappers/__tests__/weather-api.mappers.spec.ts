import {singleDayForecast} from '@modules/data/1-day-forecast'
import {WeatherAPI} from '../../weather-api'
import {toForecast} from '../weather-api.mappers'

describe('weather-api.mappers', () => {
  test('should return the right format', async () => {
    const input = singleDayForecast.DailyForecasts[0]

    const a = await WeatherAPI.getForecast1Day('1')
    console.log(a)
    expect(toForecast(input)).toMatchObject({
      date: '2021-07-21T07:00:00+02:00',
      maxTemp: 77,
      minTemp: 58,
    })
    expect(a).toBe(1)
  })
})
