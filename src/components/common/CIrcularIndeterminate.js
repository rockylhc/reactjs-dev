import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet('Progress', theme => ({

  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position: 'fixed',
    height:'100%',
    top: '50%',
    left: '50%',
    marginTop:'-40px',
    marginLeft:'-40px',
  },
}));

const CircularIndeterminate = props  => {
  const classes = props.classes;
  return (

      <CircularProgress color="accent" className={classes.progress} size={80} />

  );
}
export default withStyles(styleSheet)(CircularIndeterminate);
