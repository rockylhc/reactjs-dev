import React, {Component} from 'react';
import {connect} from 'react-redux';
import NotificationCenter from './common/NotificationCenter';
import Typography from 'material-ui/Typography';
class Footer extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      open:false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  componentWillReceiveProps(nextProps){
      this.setState({open:true});
  }
  handleRequestClose(evt){
      evt.preventDefault();
      this.setState({open:false});
  }
  render(){
    const {announcement} = this.props;

    return (
        <footer>
            <Typography type="body1" gutterBottom align="left">
              I'm Footer
            </Typography>
            <NotificationCenter announcement={announcement} open={this.state.open} handleRequestClose={this.handleRequestClose} />
        </footer>
    );
  }
}
function mapStateToProps(state, ownProps){

  return {
    announcement: state.app.announcement
  }
}

export default connect(mapStateToProps)(Footer);
