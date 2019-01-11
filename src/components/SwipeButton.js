import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import classNames from 'classnames';

class SwipeButton extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    back: PropTypes.bool,
    onClick: PropTypes.func,
  };

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={this.props.back ? undefined : { right: '0%' }}
        className={classNames(classes.overlay, this.props.className)}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.onClick}>
          {this.props.back ? (
            <ArrowBackIosOutlined />
          ) : (
            <ArrowForwardIosOutlined />
          )}
        </Button>
      </div>
    );
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
}

const styles = (theme) => ({
  overlay: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%,-50%)',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  button: {
    minWidth: 0,
    minHeight: 0,
    width: 40,
    height: 40,
    borderRadius: 45,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: fade(Colors.black, 0.5),
    color: Colors.white,
    '&:hover': {
      boxShadow: '0px 0px 12px rgba(33, 150, 243, 0.75)',
      backgroundColor: Colors.black,
    },
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

export default withStyles(styles)(SwipeButton);
