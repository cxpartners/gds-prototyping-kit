import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from './pages/Example';
import Check from './pages/Check';
import RadioForm from './pages/RadioForm';
import TextForm from './pages/TextForm';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Example} />
      <Route path="/radioform" component={RadioForm} />
      <Route path="/textform" component={TextForm} />
      <Route path="/check" component={Check} />
    </Switch>
  </Router>
);

export default hot(App);
