import ApolloClient from "apollo-client"
import fetch from "isomorphic-fetch"
import React from "react"
import { ApolloProvider } from "react-apollo-hooks"
import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { InMemoryCache } from "apollo-cache-inmemory"
import { SubscriptionClient } from "subscriptions-transport-ws"
import { getMainDefinition } from "apollo-utilities"
import ws from "ws"

import {} from "apollo-boost"

const URL = process.env.GATSBY_GRAPHQL_ENDPOINT
const SECRET = process.env.GATSBY_HASURA_SECRET

const http = new HttpLink({
  uri: URL,
  headers: {
    "x-hasura-admin-secret": SECRET,
  },
  fetch,
})

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)

  return kind === "OperationDefinition" && operation === "subscription"
}, http)

export const client = new ApolloClient({ link, cache: new InMemoryCache() })

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
