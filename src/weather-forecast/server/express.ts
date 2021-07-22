import {ApolloServer} from 'apollo-server'
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
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready ${url}`)
})
