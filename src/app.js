import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';

import Launch from './launch';
import Local from './local';
import Rates from './rates';

export const App = () => (
  <div>
    <nav>
      <Link to="/launch">Launch</Link>
      <Link to="/local">Local</Link>
      <Link to="/rates">Rates</Link>
    </nav>
    <Switch>
      <Redirect exact from="/" to="/launch"/>
      <Route path="/launch" component={Launch} />
      <Route path="/local" component={Local} />
      <Route path="/rates" component={Rates} />
    </Switch>
  </div>
);

export default App;
