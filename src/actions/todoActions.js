import * as types from './actionTypes';
import todoApi from '../api/mockTodoApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTodosSuccess(todos){
  return { type:types.LOAD_TODOS_SUCCESS, todos}
}

export function createTodoSuccess(todo){
  return {type:types.CREATE_TODO_SUCCESS, todo}
}

export function updateTodoSuccess(todo){
  return {type:types.UPDATE_TODO_SUCCESS, todo}
}

export function loadTodos(){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return todoApi.getAllTodos().then(todos=>{
      dispatch(loadTodosSuccess(todos));
    }).catch(error=>{
      throw(error);
    })
  }
}

export function saveTodo(todo){
  return function (dispatch, getState){
    dispatch(beginAjaxCall());
    return todoApi.saveTodo(todo).then(savedTodo=>{
      todo.id ? dispatch(updateTodoSuccess(savedTodo)) :
      dispatch(createTodoSuccess(savedTodo));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      throw(error);
    })
  }
}
