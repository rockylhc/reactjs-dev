import React,{ Component } from 'react';
import {connect} from 'react-redux';
import LoadingDots from './LoadingDots';
import Toolbar from 'material-ui/Toolbar';
import List,{ListItem, ListItemText} from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import {NavLink} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import Button from 'material-ui/Button';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import BroadcastButton from './BroadcastButton';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/appActions';
const styleSheet = createStyleSheet('FlatButtons', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  select:{
    background: theme.palette.background.paper
  }
}));
const isMobile =() => {
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) return true;
  return false
}
const options = {
  'en': 'English',
  'zh-tw': '中文'
};

class Header extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: 1,
    };
  }
  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.props.actions.changeLocale(Object.keys(options)[index]);
    this.setState({ selectedIndex: index, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {loading, classes, i18n, locale} = this.props;

    return(
      <Toolbar>
            <NavLink to="/" activeClassName="active">
              <IconButton className={classes.button}>
                <HomeIcon />
              </IconButton>

            </NavLink>
            <NavLink to='/about'  activeClassName="active"><Button raised color="primary" className={classes.button}>{i18n['aboutUs']}</Button></NavLink>
            <NavLink to='/todo'  activeClassName="active"><Button raised color="accent" className={classes.button}>{i18n['navigation.todo']}</Button></NavLink>
        {isMobile()==true ?(
              <select>
                <option>English</option>
                <option>Chinese</option>
              </select>
        ):(
        <div className={classes.select}>
          <List>
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              onClick={this.handleClickListItem}
            >
              <ListItemText primary={options[locale]} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            {Object.keys(options).map((option, index) =>
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {options[option]}
              </MenuItem>
            )}
          </Menu>
        </div>

        )}

            <BroadcastButton broadcastMsg="announcement 1" />
            <BroadcastButton broadcastMsg="announcement 2" />
          <ListItem>{loading && <LoadingDots interval={100} dots={5} /> }</ListItem>
      </Toolbar>
    );
  }
}
function mapStateToProps(state, ownProps){
  return {
    locale: state.app.locale,
    loading:state.ajaxCallsInProgress > 0
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TranslatorHOC(withStyles(styleSheet)(Header)));
