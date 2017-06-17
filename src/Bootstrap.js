import React from 'react';
import {render} from 'react-dom';
import configureStore, {hashHistory} from './store/configureStore';
import {loadTodos} from './actions/todoActions';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import 'typeface-roboto';
import './assets/css/style.scss';
import { ConnectedRouter } from 'connected-react-router';
import {Route, Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodoPage from './components/todo/TodoPage';
import ManageTodoPage from './components/todo/ManageTodoPage';
import ViewTodoPage from './components/todo/ViewTodoPage';

const store = configureStore();
store.dispatch(loadTodos());

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light', // Switching the dark mode on is a single property value change.
  }),
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={hashHistory}>
        <Switch>
          <App>
            <Route exact path="/" component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route exact path='/todo' component={TodoPage}/>
            <Route exact path='/create/todo' component={ManageTodoPage}/>
            <Route exact path='/todo/edit/:id' component={ManageTodoPage}/>
            <Route exact path='/todo/:id' component={ViewTodoPage}/>
          </App>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
