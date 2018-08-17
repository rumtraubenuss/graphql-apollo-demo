import React from 'react';
import { compose, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {
  withRatesData,
  withSomeValueData,
  withMutateSomeValue,
  withRestData,
} from './data-hocs';

export const App = ({ rates }) => (
  <div>
    <p>GRAPHQL data:</p>
    <div>
      {rates.map(({ rate, currency }) => (
        <div key={currency}>{`${currency} ${rate}`}</div>
      ))}
    </div>
  </div>
);

const query = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default () => (
  <Query {...{ query }}>
    {({ data: { rates }, loading }) => {
      if (loading) return <div>LOADING</div>;
      return <App {...{ rates }}/>
    }}
  </Query>
)

// export default compose(
//   withMutateSomeValue,
//   withRatesData,
//   withSomeValueData,
//   withRestData,
// )(App);
//
//
//
    // <button onClick={() => updateSomeValue(!someValue)}>CLICK HERE</button>
    // <span>{someValue ? 'someValue is: TRUE' : 'someValue is: FALSE'}</span>
    // <hr />
    // <span>REST data: {loadingRest ? 'LOADING' : launch.mission_name}</span>
    // <hr />
