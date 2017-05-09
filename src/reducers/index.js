import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import shops from './shopReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import message from './messageReducer';
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  message,
  shops
});

export default rootReducer;
