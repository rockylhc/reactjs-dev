import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';
import Button from 'material-ui/Button';
class BroadcastButton extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    event.preventDefault();
    this.props.actions.broadcastMessage(this.props.broadcastMsg)
  }
  render(){
    const { broadcastMsg } = this.props;

    return(
      <Button onClick={this.onClick}>{ broadcastMsg }</Button>
    );
  }
}

function mapStateToProps(state, ownProps){

  return {
    announcement: state.announcement
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(messageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BroadcastButton);
