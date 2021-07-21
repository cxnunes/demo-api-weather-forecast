import {ApolloServer} from 'apollo-server-lambda'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {resolvers} from '../schemas/resolvers'
import {typeDefs} from '../schemas/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({event, context, express}) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  }),
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

export const handler = server.createHandler()
