import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {autoRehydrate} from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHashHistory from 'history/createHashHistory';

export const hashHistory = createHashHistory({
  basename: '',
  hashType: 'slash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

export default function configureStore(initialState){
  return createStore(
    connectRouter(hashHistory)(rootReducer),
    initialState,
    applyMiddleware(
      routerMiddleware(hashHistory),
      thunk,
      reduxImmutableStateInvariant()
    ),
    autoRehydrate()
  );
}
