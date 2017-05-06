import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';
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
      <a onClick={this.onClick} >{componenttext}</a>
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
