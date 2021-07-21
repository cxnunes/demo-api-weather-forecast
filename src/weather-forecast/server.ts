import {ApolloServer, gql} from 'apollo-server-lambda'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

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

export const graphqlHandler = server.createHandler()