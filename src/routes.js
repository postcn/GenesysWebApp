import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import CommunicationBar from './components/CommunicationBar';

const Routes = (props) => (
  <BrowserRouter {...props}>
  <div className="container-fluid">
    <NavBar/>
    <CommunicationBar/>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default Routes;