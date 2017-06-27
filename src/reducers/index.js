import {combineReducers} from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import announcement from './messageReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  announcement,
  todos,
});

export default rootReducer;
