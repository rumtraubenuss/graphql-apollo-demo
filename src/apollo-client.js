import ApolloClient from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uriGraphql = 'https://w5xlvm3vzz.lp.gql.zone/graphql';
const uriRest = 'https://api.spacexdata.com/v2/';

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: uriGraphql });
const restLink = new RestLink({ uri: uriRest });

const stateLink = withClientState({
    cache,
    defaults: {
      networkStatus: {
        __typename: 'SomeValue',
        someValue: true,
        test: 24,
      },
    },
    resolvers: {
      Mutation: {
        updateSomeValue: (_, { someValue }, { cache }) => {
          cache.writeData({ data: { networkStatus: { __typename: 'SomeValue', someValue } } });
          return null;
        }
      },
    },
  }
);

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, restLink, httpLink]),
});

export default client;
