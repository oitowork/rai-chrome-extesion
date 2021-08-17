
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const healthClient = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/index-node/graphql'
    }),
    cache: new InMemoryCache(),
    shouldBatch: true
  })
