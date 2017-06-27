import AuthorApi from  '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
export let loadAuthorsSuccess = (authors) =>{
  return {type:types.LOAD_AUTHORS_SUCCESS, authors};
}

export let loadAuthors = () =>{
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors=>{
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    })
  }
}
