import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
import Profile from '../Profile/Profile';

const styles = theme => ({
  root: {
    position: 'absolute',
    padding: theme.spacing.unit * 3,
    minWidth: '250px',
    transform: `translate(-50%, calc(-100% - ${theme.spacing.unit * 1.5}px))`,
    zIndex: 1250,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: `-${theme.spacing.unit * 1.5}px`,
      left: '50%',
      width: theme.spacing.unit * 3,
      height: theme.spacing.unit * 3,
      backgroundColor: 'white',
      transform: 'translateX(-50%) rotate(45deg)',
    },
  },
});

// handleClosePopupClick
const Popup = props => {
  const content = props.user ? (
    <Profile name={props.user.name} email={props.user.email} photoUrl={props.user.photoUrl} />
  ) : (
    <Typography>Please, sign in to hold this place</Typography>
  );
  return (
    <ClickAwayListener onClickAway={props.handlePopupClose}>
      <Paper
        className={props.classes.root}
        style={{
          top: props.y + props.centerVertical + 'px',
          left: props.x + props.centerHorizontal + 'px',
        }}
        elevation={24}
      >
        {content}
      </Paper>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(Popup);
