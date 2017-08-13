import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer';
import Header from './common/Header';
import Grid from 'material-ui/Grid';

class App extends Component{
  renderChildren(){
    let {children} = this.props;
    return React.Children.map(children, (child) =>
      React.cloneElement(child,{locale:this.props.locale})
    )
  }
  render(){
      return (
          <Grid container>
            <Grid item xs={12}>
              <Header {...this.props}  />
            </Grid>
            <Grid item xs={12}>
              {this.renderChildren()}
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

