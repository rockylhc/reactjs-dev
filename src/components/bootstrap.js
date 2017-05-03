import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer';
import Header from './common/Header';

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
            <div className="row">
              <Header loading={this.props.loading} />
                <div className="col-md-12">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
  return {
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(Bootstrap);
