import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './app';
import client from './apollo-client';

ReactDOM.render((
  <ApolloProvider {...{ client }}>
    <App />
  </ApolloProvider>
), document.getElementById('root'));
