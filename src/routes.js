import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </ConnectedSwitch>
);

const ReduxApp = connect(state => ({
  location: state.location
}))(AppContainer);

const Routes = (props) => (
  <ConnectedRouter {...props}>
    <ReduxApp/>
  </ConnectedRouter>
);

export default Routes;