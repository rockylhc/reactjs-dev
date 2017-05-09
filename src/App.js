import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadShops} from './actions/shopActions';
import {Provider} from 'react-redux';
import '../node_modules/semantic-ui-css/semantic.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadShops());

render(
    <Provider  store={store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
  document.getElementById('app')
);
