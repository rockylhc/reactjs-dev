import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shopActions from '../../actions/shopActions';
import {Image} from 'semantic-ui-react';


class ViewShopPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      shop:Object.assign({},this.props.shop)
    };

  }

  componentWillReceiveProps(nextProps){
    if(this.props.shop.id != nextProps.shop.id){
      this.setState({shop:Object.assign({}, nextProps.shop)});
    }
  }
  render(){
    const {shop} = this.state.shop;
    debugger;
    return (
        <div>

        </div>

    );
  }
}

function getShopById(shops, id){
  const shop = shops.filter(shop => shop.id == id);
  if(shop.length) return shop[0];
  return null;
}

function mapStateToProps(state, ownProps){
  let shop ={title:'', img:'',category:''}
  const shopId = ownProps.params.id;

  if(shopId && state.shops.length > 0 ){
    shop = getShopById(state.shops, shopId);
  }

  return{shop:shop};
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(shopActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewShopPage);
