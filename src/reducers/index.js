import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import personalFormReducer from './personal-info';
import buildPolicyReducer from './build-policy';

export default combineReducers({
  router: routerReducer,
  authReducer,
  personalFormReducer,
  buildPolicyReducer,
});
