import React, {Component} from 'react';
import Footer from './footer';
import Header from './common/Header';

var a = [4, 5, 6];
var b = [1, 2, 3, ...a, 7, 8, 9, 0];
console.log(b);

class Bootstrap extends Component{
    render(){
        return (
            <div className="row">
              <Header />
                <div className="col-md-12">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Bootstrap;
