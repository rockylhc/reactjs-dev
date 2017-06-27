import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';

const styleSheet = createStyleSheet('Homepage', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  button: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
}));

class HomePage extends Component{
  render(){
    const {i18n} = this.props;
    const classes = this.props.classes;
    return(
      <div>
        <Paper className={classes.root}>
          <Typography type="headline" component="h1">
            {i18n['home']}
          </Typography>
          <Link to='/about'>
            <Button className={classes.button} raised>{i18n['aboutUs']}</Button>
          </Link>
          <Link to='about'><Button  className={classes.button} raised>{i18n['view']}</Button></Link>
        </Paper>
      </div>
    );
  }
}

export default TranslatorHOC(withStyles(styleSheet)(HomePage));
