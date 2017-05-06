import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer';
import Header from './common/Header';
import {Container, Grid} from 'semantic-ui-react';
import 'modernizr';
/*
var a = [4, 5, 6];
var b = [1, 2, 3, ...a, 7, 8, 9, 0];
console.log(b);
if (!Modernizr.inputtypes['datetime-local']) {
  console.log(Modernizr.inputtypes['datetime-local']);
 console.log(Modernizr);
}*/

class Bootstrap extends Component{

    render(){
        return (
            <Container>
              <Grid.Row>

                  <Header loading={this.props.loading}  />

              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  {this.props.children}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Footer />
                </Grid.Column>
              </Grid.Row>


            </Container>
        );
    }
}

function mapStateToProps(state, ownProps){
  return {
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(Bootstrap);
