import React,{Component} from 'react';
import {Link} from 'react-router';
import { Item } from 'semantic-ui-react'
import TranslatorHOC from '../../HOC/TranslatorHOC';

class HomePage extends Component{
  render(){
    const {i18n} = this.props;
    return(
      <div className='jumbotron'>
        <h1>rockylhc learning react redux</h1>
        <p>implementation in react redux</p>
        <Item>
          <Item.Content content='About' className='ui button' as={Link} to='/about' />
        </Item>
        <Link to='about'>View</Link>
      </div>
    );
  }
}

export default TranslatorHOC(HomePage);
