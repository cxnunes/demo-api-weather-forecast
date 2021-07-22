export const singleDayForecast = {
  Headline: {
    EffectiveDate: '2021-07-24T08:00:00+02:00',
    EffectiveEpochDate: 1627106400,
    Severity: 5,
    Text: 'Thunderstorms in the area Saturday morning through Saturday evening',
    Category: 'thunderstorm',
    EndDate: '2021-07-25T02:00:00+02:00',
    EndEpochDate: 1627171200,
    MobileLink:
      'http://www.accuweather.com/en/nl/amsterdam/249758/extended-weather-forecast/249758?lang=en-us',
    Link: 'http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2021-07-21T07:00:00+02:00',
      EpochDate: 1626843600,
      Temperature: {
        Minimum: {
          Value: 58.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 77.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&lang=en-us',
    },
  ],
}
