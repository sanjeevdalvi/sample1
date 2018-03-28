import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import rootReducer from './reducers';
import { loadState, saveState } from './helpers/local-storage';

export const history = createHistory();

const localStorageState = loadState();
const initialState = localStorageState ? localStorageState : {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(() => {
  saveState({
    personalFormReducer: store.getState().personalFormReducer,
    buildPolicyReducer: store.getState().buildPolicyReducer,
  });
});

export default store;
