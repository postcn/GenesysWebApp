import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {routerMiddleware} from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './routes';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools()
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
