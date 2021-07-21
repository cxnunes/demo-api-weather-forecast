import {ApolloServer} from 'apollo-server'
import {resolvers} from '../schemas/resolvers'
import {typeDefs} from '../schemas/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready ${url}`)
})
