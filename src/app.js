import React from 'react';

import Launch from './launch';
import Local from './local';
import Rates from './rates';

export const App = () => (
  <div>
    <Local />
    <hr />
    <Launch />
    <hr />
    <Rates />
  </div>
);

export default App;
