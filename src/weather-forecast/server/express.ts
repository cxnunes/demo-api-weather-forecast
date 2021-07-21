import {ApolloServer} from 'apollo-server'
import {resolvers} from '../models/resolvers'
import {typeDefs} from '../models/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready ${url}`)
})
