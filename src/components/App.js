import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './common/Footer';
import Header from './common/Header';
import Grid from 'material-ui/Grid';

class App extends Component{
  render(){
      return (
          <Grid container>
            <Grid item xs={12}>
              <Header {...this.props}  />
            </Grid>
            <Grid item xs={12}>
              {this.props.children}
            </Grid>
            <Grid item xs={12}>
              <Footer {...this.props}  />
            </Grid>
          </Grid>
      );
  }
}

function mapStateToProps(state, ownProps){
  return {
    locale:state.app.locale,
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);

