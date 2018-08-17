import React from 'react';
import { compose } from 'react-apollo';

import {
  withRatesData,
  withSomeValueData,
  withMutateSomeValue,
  withRestData,
} from './data-hocs';

export const App = ({ loading, rates, someValue, test, updateSomeValue, launch, loadingRest }) => (
  <div>
    <button onClick={() => updateSomeValue(!someValue)}>CLICK HERE</button>
    <span>{someValue ? 'someValue is: TRUE' : 'someValue is: FALSE'}</span>
    <hr />
    <span>REST data: {loadingRest ? 'LOADING' : launch.mission_name}</span>
    <hr />
    <p>GRAPHQL data:</p>
    <div>
      {loading ? 'LOADING' : rates.map(({ rate, currency }) => (
        <div key={currency}>{`${currency} ${rate}`}</div>
      ))}
    </div>
  </div>
);

export default compose(
  withMutateSomeValue,
  withRatesData,
  withSomeValueData,
  withRestData,
)(App);
