import React from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {Image, Grid, Search} from 'semantic-ui-react';

const Header = ({loading, message}) =>{
  return (
    <nav>
      <Image
        src="http://placehold.it/350x150?text=Howay"
         size="small"
        as={IndexLink} to='/'
      />

      <Search
        loading={false}
        aligned='right'
      />

      <Link to='/about' activeClassName='active'>
        About Us
      </Link>
      {" | "}
      <Link to='/courses' activeClassName='active'>Courses</Link>
      {loading && <LoadingDots interval={100} dots={5} /> }
    </nav>
  );
};

export default Header;
