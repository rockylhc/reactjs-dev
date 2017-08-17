import React from 'react';
import App from './components/App';
import {Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodoPage from './components/todo/TodoPage';
import ManageTodoPage from './components/todo/ManageTodoPage';
import ViewTodoPage from './components/todo/ViewTodoPage';
import Login from './components/user/Login';

const RouteConfig = (someProps)=> (

  <Switch>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route path='/about' component={AboutPage}/>
      <Route exact path='/todo' component={TodoPage}/>
      <Route exact path='/create/todo' component={ManageTodoPage}/>
      <Route exact path='/todo/edit/:id' component={ManageTodoPage}/>
      <Route exact path='/todo/:id' component={ViewTodoPage}/>
    </App>
  </Switch>
);

export default RouteConfig;
