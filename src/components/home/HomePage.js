import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className='jumbotron'>
        <h1>Title</h1>
        <p>lorem ipsum</p>
        <Link to='about' className='btn btn-primary btn-lg'>View</Link>
      </div>
    );
  }
}

export default HomePage;