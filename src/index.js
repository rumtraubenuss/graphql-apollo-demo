import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { RestLink } from 'apollo-link-rest';

import './index.css';
import App from './App';

const restLink = new RestLink({
  uri: 'https://api.spacexdata.com/v2/',
});

const client = new ApolloClient({
  restLink: restLink,
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

ReactDOM.render(<ApolloProvider {...{ client }}><App /></ApolloProvider>, document.getElementById('root'));
