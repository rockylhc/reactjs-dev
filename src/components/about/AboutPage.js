import React from 'react';
import {connect} from 'react-redux';
import Typography from 'material-ui/Typography';

class AboutPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='jumbotron'>
        <h1>rockylhc learning react redux</h1>
        <Typography type="body1" gutterBottom align="left">
          implementation in react redux
        </Typography>


      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  console.log(state)
  return {
    locale: state.app.locale
  };
}

export default connect(mapStateToProps)(AboutPage);
