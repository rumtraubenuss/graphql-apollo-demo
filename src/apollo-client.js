import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
  clientState: {
    defaults: {
      networkStatus: {
        __typename: 'NetworkStatus',
        someValue: true,
        test: 24,
      },
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { someValue }, { cache }) => {
          cache.writeData({ data: { networkStatus: { __typename: 'NetworkStatus', someValue } } });
          return null;
        }
      },
    }
  }
});

export default client;
