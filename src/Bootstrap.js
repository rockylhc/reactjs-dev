import React from 'react';
import {render} from 'react-dom';
import configureStore, {hashHistory} from './store/configureStore';
import {persistStore} from 'redux-persist'
import {loadTodos} from './actions/todoActions';
import {broadcastMessage} from './actions/messageActions';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import 'typeface-roboto';
import './assets/css/style.scss';
import { ConnectedRouter } from 'connected-react-router';
import RouteConfig from './routes';

const store = configureStore();
store.dispatch(loadTodos());
persistStore(store);
const theme = createMuiTheme({
  palette: createPalette({
    type: 'light', // Switching the dark mode on is a single property value change.
  }),
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={hashHistory}>
        <RouteConfig />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
