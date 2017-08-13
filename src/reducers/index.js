import {combineReducers} from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import app from './appReducer';
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  ajaxCallsInProgress,
  app,
  todos,
  router:routerReducer
});

export default rootReducer;
