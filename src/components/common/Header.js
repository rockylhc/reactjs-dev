import React,{ Component } from 'react';
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
const options = [
  'English',
  'Chinese'
];

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
    this.setState({ selectedIndex: index, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {loading, i18n, classes, message} = this.props;

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
              <ListItemText primary="English"/>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            {options.map((option, index) =>
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
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

  return{loading:loading, message:message};
}
export default withStyles(styleSheet)(TranslatorHOC(Header));
