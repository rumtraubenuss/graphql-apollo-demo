import React from 'react';
import { compose } from 'react-apollo';

import {
  withRatesData,
  withSomeValueData,
  withUpdateNetworkStatus,
} from './data-hocs';

export const App = ({ loading, error, rates, someValue, test, updateNetworkStatus }) => (
  <div>
    <button onClick={() => updateNetworkStatus(!someValue)}>CLICK HERE</button>
    <span>{someValue ? 'someValue is: TRUE' : 'someValue is: FALSE'}</span>
    <hr />
    <div>
      {loading ? 'LOADING' : rates.map(({ rate, currency }) => (
        <div key={currency}>{`${currency} ${rate}`}</div>
      ))}
    </div>
  </div>
);

export default compose(
  withUpdateNetworkStatus,
  withRatesData,
  withSomeValueData,
)(App);
