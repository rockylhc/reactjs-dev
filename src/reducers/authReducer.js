import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state=initialState.user, action){
  switch(action.type){

    case types.LOGIN_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.user)
      ];
    case types.LOGIN_FAILED:
      return [
        ...state.filter(course=>course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
