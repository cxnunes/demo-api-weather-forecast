import {singleDayForecast} from './forecast.mock'
import {toForecast} from '../forecast-api'

describe('forecast-api', () => {
  test('should return the right format', async () => {
    const data = singleDayForecast.DailyForecasts[0]

    expect(toForecast('Amsterdam', data)).toMatchObject({
      city: 'Amsterdam',
      date: '2021-07-21T07:00:00+02:00',
      minTemp: '58 F',
      maxTemp: '77 F',
      day: 'Partly sunny, no rain :)',
      evening: 'Partly cloudy, no rain :)',
    })
  })
})
