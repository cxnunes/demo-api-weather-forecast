import {ApolloServer} from 'apollo-server-lambda'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {typeDefs, resolvers} from '../schemas/forecast.schema'
import {CitiesAPI} from '../../resources/cities/cities-api'
import {ForecastAPI} from '../../resources/forecast/forecast-api'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    forecastApi: ForecastAPI,
    citiesApi: CitiesAPI,
  },
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

export const handler = server.createHandler()
