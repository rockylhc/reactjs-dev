import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(save({states:['app','user']}), thunk, reduxImmutableStateInvariant())
  );
}
