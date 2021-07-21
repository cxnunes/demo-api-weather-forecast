import {ApolloServer, gql} from 'apollo-server'

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
})

export const init = () => {
  server.listen().then(({url}) => {
    console.log(`🚀 Server ready ${url}`)
  })
}
