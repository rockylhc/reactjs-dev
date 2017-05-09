import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';
import {Item} from 'semantic-ui-react';
class LinkComponent extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    event.preventDefault();
    this.props.actions.logMessage(this.props.componenttext)
  }
  render(){
    const {componenttext} = this.props;

    return(
    <Item>
      <Item.Content content={componenttext} className='ui button' onClick={this.onClick} />
    </Item>
    );
  }
}

function mapStateToProps(state, ownProps){

  return {
    message: state.message
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(messageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LinkComponent);
