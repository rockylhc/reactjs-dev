import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import Bootstrap from './components/bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "./assets/css/style.scss";

const store = configureStore();
store.dispatch(loadCourses());
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
