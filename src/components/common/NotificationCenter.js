import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const styleSheet = createStyleSheet('SimpleSnackbar', theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
}));

const NotificationCenter  = ({announcement, open, handleRequestClose, classes}) => {
  return(
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={1e3}
      contentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{announcement}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={handleRequestClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};
export default withStyles(styleSheet)(NotificationCenter);

