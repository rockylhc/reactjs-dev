import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer';
import Header from './common/Header';
import Grid from 'material-ui/Grid';
import {Route} from 'react-router-dom';
import 'modernizr';
/*
var a = [4, 5, 6];
var b = [1, 2, 3, ...a, 7, 8, 9, 0];
console.log(b);
if (!Modernizr.inputtypes['datetime-local']) {
  console.log(Modernizr.inputtypes['datetime-local']);
 console.log(Modernizr);
}*/
/*
const App = ({children}) =>{
  return(
    <Route {...rest} render={matchProps => (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    )} />
  );
}
*/

class App extends Component{

    render(){
        return (
            <Grid container>
              <Grid item xs={12}>
                  <Header loading={this.props.loading}  />
              </Grid>
              <Grid item xs={12}>
              {this.props.children}
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state, ownProps){
  return {
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);

