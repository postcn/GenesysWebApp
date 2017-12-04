import {createStore, applyMiddleware} from 'redux';
import { loadState, saveState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;