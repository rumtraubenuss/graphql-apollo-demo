import ApolloClient from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://w5xlvm3vzz.lp.gql.zone/graphql';
const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri });

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
  link: ApolloLink.from([stateLink, httpLink]),
});

export default client;
