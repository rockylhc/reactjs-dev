import React,{Component} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {Image, Grid, Search} from 'semantic-ui-react';
import TranslatorHOC from '../../HOC/TranslatorHOC';

class Header extends Component {
  render() {
    const {loading, i18n} = this.props;
    return(
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
          {i18n['aboutUs']}
        </Link>
        {" | "}
        <Link to='/courses' activeClassName='active'>{i18n['navigation.courses']}</Link>
        {loading && <LoadingDots interval={100} dots={5} /> }
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{loading:loading};
}
export default TranslatorHOC(Header);

