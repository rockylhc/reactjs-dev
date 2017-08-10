import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/appActions';
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

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(BroadcastButton);
