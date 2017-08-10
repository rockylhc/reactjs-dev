import {combineReducers} from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import app from './appReducer';
const rootReducer = combineReducers({
  ajaxCallsInProgress,
  app,
  todos,
});

export default rootReducer;
