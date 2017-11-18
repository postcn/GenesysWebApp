import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './routes';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const history = createHistory();

const middleware = routerMiddleware(history);

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(
    applyMiddleware(middleware)
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
