import React from 'react';
import {Link} from 'react-router';
import { Item } from 'semantic-ui-react'

class HomePage extends React.Component{

  render(){
    return(
      <div className='jumbotron'>

        <h1>Title</h1>
        <p>lorem ipsum</p>
        <Item>
          <Item.Content content='About' className='ui button' as={Link} to='/about' />
        </Item>
        <Link to='about'>View</Link>
      </div>
    );
  }
}

export default HomePage;
