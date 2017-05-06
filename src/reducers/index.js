import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import message from './messageReducer';
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  message
});

export default rootReducer;
