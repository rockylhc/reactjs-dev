import {combineReducers} from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import app from './appReducer';
import user from './authReducer';
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  ajaxCallsInProgress,
  app,
  todos,
  user,
  router:routerReducer
});

export default rootReducer;
