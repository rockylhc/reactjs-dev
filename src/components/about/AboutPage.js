import React from 'react';
import {connect} from 'react-redux';
import Typography from 'material-ui/Typography';
import TranslatorHOC from "../../HOC/TranslatorHOC";

class AboutPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {i18n} = this.props;
    return(
      <h1>{i18n['aboutTxt']}</h1>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    locale: state.app.locale
  };
}

export default connect(mapStateToProps)(TranslatorHOC(AboutPage));
