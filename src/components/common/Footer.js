import React, {Component} from 'react';
import {connect} from 'react-redux';
import NotificationCenter from './NotificationCenter';
import Typography from 'material-ui/Typography';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/appActions';

class Footer extends Component{
  constructor(props, context){
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleRequestClose(evt){
    evt.preventDefault();
    this.setState({app:{openAnnouncement:false}});
    this.props.actions.closeNotification();
  }
  render(){
    const {announcement, openAnnouncement, i18n} = this.props;

    return (
        <footer>
            <Typography type="body1" gutterBottom align="left">
              {i18n['footerText']}
            </Typography>
            <NotificationCenter announcement={announcement} open={openAnnouncement} handleRequestClose={this.handleRequestClose} />
        </footer>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(AppActions, dispatch)
  };
}


function mapStateToProps(state, ownProps){

  return {
    announcement: state.app.announcement,
    openAnnouncement:state.app.openAnnouncement
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatorHOC(Footer));
