import React from 'react';
import App from './components/App';
import {Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodoPage from './components/todo/TodoPage';
import ManageTodoPage from './components/todo/ManageTodoPage';
import ViewTodoPage from './components/todo/ViewTodoPage';

const RouteConfig = ()=> (
  <Switch>
    <App exact path="/" component={HomePage}/>
    <App path='about' component={AboutPage}/>
    <App exact path='todo' component={TodoPage}/>
    <App path='todo/create' component={ManageTodoPage}/>
    <App path='todo/edit/:id' component={ManageTodoPage}/>
    <App path='todo/:id' component={ViewTodoPage}/>
  </Switch>
);

export default RouteConfig;
