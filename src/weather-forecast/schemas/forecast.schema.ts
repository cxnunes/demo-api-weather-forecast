import {ForecastAPI} from '../../resources/forecast/forecast-api'
import {gql} from 'apollo-server'
import {CitiesAPI} from '@modules/resources/cities/cities-api'

export const typeDefs = gql`
  type Query {
    hello(name: String!): String
    forecast(name: String!): [DailyForecast]
  }

  type DailyForecast {
    city: String
    date: String
    minTemp: String
    maxTemp: String
    day: String
    evening: String
  }
`

export const resolvers = {
  Query: {
    hello: (_: any, input: {name: string}, ctx: any) => `Hello ${input.name}!`,
    forecast: (
      _: any,
      input: {name: string},
      ctx: {forecastApi: typeof ForecastAPI; citiesApi: typeof CitiesAPI},
    ) => {
      const city = ctx.citiesApi.getCityByName(input.name)
      if (!city) throw new Error('City not found')

      return ctx.forecastApi.getForecast1Day(city)
    },
  },
}
