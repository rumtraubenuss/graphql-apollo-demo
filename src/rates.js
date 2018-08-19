import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const Rates = ({ rates, loading, error }) => (
  <div>
    <p>GRAPHQL data:</p>
    {loading && <div>LOADING</div> }
    {!loading && !error && (
      <div>
        {rates.map(({ rate, currency }) => (
          <div key={currency}>{`${currency} ${rate}`}</div>
        ))}
      </div>
    )}
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
  <Query query={query}>
    {({ data: { rates }, loading, error }) => (
      <Rates {...{ rates, loading }}/>
    )}
  </Query>
);
