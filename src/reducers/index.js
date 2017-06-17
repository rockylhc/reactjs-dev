import {combineReducers} from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import message from './messageReducer';
import {reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  ajaxCallsInProgress,
  message,
  todos,
  form:formReducer
});

export default rootReducer;
