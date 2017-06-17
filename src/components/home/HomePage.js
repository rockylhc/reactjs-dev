import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';

const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

class HomePage extends Component{
  render(){
    const {i18n} = this.props;
    const classes = this.props.classes;
    return(
      <div>
        <Paper className={classes.root}>
          <Typography type="headline" component="h1">
            Home
          </Typography>
          <Link to='/about'>
            <Button href='/about'>{i18n['aboutUs']}</Button>
          </Link>
          <Link to='about'>View</Link>
        </Paper>
      </div>
    );
  }
}

export default TranslatorHOC(withStyles(styleSheet)(HomePage));
