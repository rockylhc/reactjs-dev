import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShopList from './ShopList';
import * as shopActions from '../../actions/shopActions';

class ShopsPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  shopRow(shop, index){
    return <div key={index}>{shop.title}</div>;
  }

  render(){
    const {shops} = this.props;

    return (
      <div>
        <h1>Shops</h1>
        <Link
          className="btn btn-primary"
          to="/shop"
        >Add Shop</Link>
        <ShopList shops={shops}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    shops: state.shops //from root reducer,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(shopActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopsPage);
