import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingDots from './LoadingDots';
import Toolbar from 'material-ui/Toolbar';
import {ListItem} from 'material-ui/List';
import Icon from 'material-ui/Icon';
import {NavLink} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import Button from 'material-ui/Button';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('FlatButtons', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
}));

class Header extends Component {
  render() {
    const {loading, i18n, classes} = this.props;
    return(
      <Toolbar>
            <NavLink to="/" activeClassName="active">
              <IconButton className={classes.button}>
                <HomeIcon />
              </IconButton>

            </NavLink>
            <NavLink to='/about'  activeClassName="active"><Button primary className={classes.button}>{i18n['aboutUs']}</Button></NavLink>
            <NavLink to='/todo'  activeClassName="active"><Button accent className={classes.button}>{i18n['navigation.todo']}</Button></NavLink>
          <ListItem>{loading && <LoadingDots interval={100} dots={5} /> }</ListItem>
      </Toolbar>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{loading:loading};
}
export default withStyles(styleSheet)(TranslatorHOC(Header));
