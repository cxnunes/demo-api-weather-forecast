import {ApolloServer, gql} from 'apollo-server'

export const typeDefs = gql`
  type Query {
    hello: String
    weather: [DailyForecast]
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
