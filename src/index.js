import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './app';
import client from './apollo-client';

ReactDOM.render((
  <ApolloProvider {...{ client }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
