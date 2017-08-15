import React, {Component} from 'react';
import {render} from 'react-dom';
import configureStore, {hashHistory} from './store/configureStore';
import {persistStore} from 'redux-persist'
import {loadTodos} from './actions/todoActions';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import 'typeface-roboto';
import './assets/css/style.scss';
import { ConnectedRouter } from 'react-router-redux';
import RouteConfig from './routes';
import CircularIndeterminate from './components/common/CIrcularIndeterminate';

const store = configureStore();
store.dispatch(loadTodos());
//persistStore(store);
const theme = createMuiTheme({
  palette: createPalette({
    type: 'light', // Switching the dark mode on is a single property value change.
  }),
});

class AppWrapper extends Component{
  constructor(){
    super();
    this.state = {loading:true}
  }
  componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ loading: false })
    });
  }

  render() {

    if(this.state.loading){
      return <CircularIndeterminate />
    }
    return (
      <Provider store={store}>
        <ConnectedRouter history={hashHistory}>
          <RouteConfig  />
        </ConnectedRouter>
      </Provider>
    )
  }
}

render(
  <MuiThemeProvider theme={theme}>
      <AppWrapper />
  </MuiThemeProvider>,
  document.getElementById('app')
);
